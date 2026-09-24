/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key) — unique submission ID generated per request
  - `name` (text, not null) — customer's name
  - `email` (text, not null) — customer's email address
  - `phone` (text, not null) — customer's phone number
  - `service` (text, nullable) — selected service from the form, optional
  - `message` (text, not null) — the message body from the form
  - `email_sent` (boolean, default false) — whether the notification email was successfully delivered
  - `created_at` (timestamptz, default now()) — when the submission was received

2. Security
- Enable RLS on `contact_submissions`.
- This is a no-auth app (no sign-in screen). The public form submits via the edge function which uses the service role key, so anon does not need direct table access. Policies are set to TO anon, authenticated with USING (true) / WITH CHECK (true) so the anon-key client can read/write if needed, but in practice the edge function handles all writes with the service role key.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text,
  message text NOT NULL,
  email_sent boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_submissions" ON contact_submissions;
CREATE POLICY "anon_select_submissions" ON contact_submissions FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_submissions" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_submissions" ON contact_submissions;
CREATE POLICY "anon_update_submissions" ON contact_submissions FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_submissions" ON contact_submissions;
CREATE POLICY "anon_delete_submissions" ON contact_submissions FOR DELETE
  TO anon, authenticated USING (true);
