DROP FUNCTION IF EXISTS public.get_case_status(text, text);
CREATE FUNCTION public.get_case_status(_email text, _case_number text)
RETURNS TABLE(case_number text, client_name text, stage text, manager_comment text, updated_at timestamptz, agreed_amount numeric)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public'
AS $$
  select c.case_number, c.client_name, c.stage, c.manager_comment, c.updated_at, c.agreed_amount
  from public.cases c
  where lower(trim(c.client_email)) = lower(trim(_email))
    and upper(trim(c.case_number)) = upper(trim(_case_number))
  limit 1
$$;
GRANT EXECUTE ON FUNCTION public.get_case_status(text, text) TO anon, authenticated;