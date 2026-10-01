CREATE OR REPLACE FUNCTION public.find_case_status(_query text)
RETURNS TABLE(case_number text, client_name text, stage text, manager_comment text, updated_at timestamptz)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT c.case_number::text, c.client_name::text, c.stage::text, c.manager_comment::text, c.updated_at
  FROM public.cases c
  WHERE lower(c.client_email) = lower(trim(_query))
     OR c.case_number::text = regexp_replace(_query, '\D', '', 'g')
  ORDER BY c.updated_at DESC
  LIMIT 1
$$;
GRANT EXECUTE ON FUNCTION public.find_case_status(text) TO anon, authenticated;