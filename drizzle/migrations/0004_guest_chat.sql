CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE public.guest_chats (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  token text NOT NULL UNIQUE DEFAULT encode(extensions.gen_random_bytes(24), 'hex'),
  name text NOT NULL,
  email text NOT NULL,
  last_message_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE public.guest_chat_messages (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  chat_id uuid NOT NULL REFERENCES public.guest_chats(id) ON DELETE CASCADE,
  sender_role text NOT NULL CHECK (sender_role IN ('guest','admin')),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 4000),
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.guest_chats TO authenticated;
GRANT ALL ON public.guest_chats TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.guest_chat_messages TO authenticated;
GRANT ALL ON public.guest_chat_messages TO service_role;
ALTER TABLE public.guest_chats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guest_chat_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage guest chats" ON public.guest_chats FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins manage guest chat messages" ON public.guest_chat_messages FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.guest_chat_init(_token text, _name text, _email text)
RETURNS text LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE t text;
BEGIN
  IF coalesce(trim(_name),'') = '' OR trim(_email) !~ '^\S+@\S+\.\S+$' THEN RAISE EXCEPTION 'bad input'; END IF;
  IF _token IS NOT NULL THEN
    UPDATE guest_chats SET name = left(trim(_name),100), email = left(lower(trim(_email)),255) WHERE token = _token RETURNING token INTO t;
    IF t IS NOT NULL THEN RETURN t; END IF;
  END IF;
  INSERT INTO guest_chats(name, email) VALUES (left(trim(_name),100), left(lower(trim(_email)),255)) RETURNING token INTO t;
  RETURN t;
END $$;

CREATE OR REPLACE FUNCTION public.guest_chat_list(_token text)
RETURNS TABLE(id uuid, sender_role text, message text, created_at timestamptz)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE cid uuid;
BEGIN
  SELECT c.id INTO cid FROM guest_chats c WHERE c.token = _token;
  IF cid IS NULL THEN RETURN; END IF;
  UPDATE guest_chat_messages m SET is_read = true WHERE m.chat_id = cid AND m.sender_role = 'admin' AND NOT m.is_read;
  RETURN QUERY SELECT m.id, m.sender_role, m.message, m.created_at FROM guest_chat_messages m WHERE m.chat_id = cid ORDER BY m.created_at LIMIT 500;
END $$;

CREATE OR REPLACE FUNCTION public.guest_chat_send(_token text, _message text)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE cid uuid;
BEGIN
  SELECT id INTO cid FROM guest_chats WHERE token = _token;
  IF cid IS NULL THEN RAISE EXCEPTION 'not found'; END IF;
  INSERT INTO guest_chat_messages(chat_id, sender_role, message) VALUES (cid, 'guest', left(trim(_message),4000));
  UPDATE guest_chats SET last_message_at = now() WHERE id = cid;
END $$;

REVOKE ALL ON FUNCTION public.guest_chat_init(text,text,text), public.guest_chat_list(text), public.guest_chat_send(text,text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.guest_chat_init(text,text,text), public.guest_chat_list(text), public.guest_chat_send(text,text) TO anon, authenticated;