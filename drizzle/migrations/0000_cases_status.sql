create type public.app_role as enum ('admin', 'moderator', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;

create policy "Users see own roles" on public.user_roles for select to authenticated using (user_id = auth.uid());

create table public.cases (
  id uuid primary key default gen_random_uuid(),
  case_number text not null unique,
  client_email text not null,
  client_name text,
  stage text not null default 'received',
  manager_comment text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update, delete on public.cases to authenticated;
grant all on public.cases to service_role;
alter table public.cases enable row level security;

create policy "Admins manage cases" on public.cases for all to authenticated
  using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));

create or replace function public.touch_updated_at() returns trigger language plpgsql set search_path = public as $$
begin new.updated_at = now(); return new; end $$;
create trigger cases_touch before update on public.cases for each row execute function public.touch_updated_at();

create or replace function public.get_case_status(_email text, _case_number text)
returns table (case_number text, client_name text, stage text, manager_comment text, updated_at timestamptz)
language sql stable security definer set search_path = public
as $$
  select c.case_number, c.client_name, c.stage, c.manager_comment, c.updated_at
  from public.cases c
  where lower(trim(c.client_email)) = lower(trim(_email))
    and upper(trim(c.case_number)) = upper(trim(_case_number))
  limit 1
$$;
grant execute on function public.get_case_status(text, text) to anon, authenticated;