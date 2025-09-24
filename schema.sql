-- PostgreSQL schema for Boxes marketplace (basic)
CREATE TABLE users (
  id serial PRIMARY KEY,
  email text UNIQUE NOT NULL,
  password_hash text,
  name text,
  role text DEFAULT 'user',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE plans (
  id serial PRIMARY KEY,
  name text,
  price_monthly numeric,
  max_boxes int,
  features jsonb
);

CREATE TABLE boxes (
  id serial PRIMARY KEY,
  user_id int REFERENCES users(id) ON DELETE CASCADE,
  title text,
  description text,
  category text,
  media jsonb,
  embed_url text,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE subscriptions (
  id serial PRIMARY KEY,
  user_id int REFERENCES users(id) ON DELETE CASCADE,
  plan_id int REFERENCES plans(id),
  provider text,
  provider_sub_id text,
  status text,
  started_at timestamptz,
  expires_at timestamptz
);

CREATE TABLE payments (
  id serial PRIMARY KEY,
  user_id int REFERENCES users(id),
  provider text,
  provider_txn_id text,
  amount numeric,
  currency text,
  status text,
  created_at timestamptz DEFAULT now()
);
