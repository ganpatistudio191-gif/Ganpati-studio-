-- Ganpati Studio product catalogue and enquiries
create extension if not exists "pgcrypto";

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text not null,
  price integer not null check (price >= 0),
  description text not null default '',
  image_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.relationships (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  emoji text not null default '🎁',
  sort_order integer not null default 0
);

create table if not exists public.occasions (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  emoji text not null default '✨',
  sort_order integer not null default 0
);

create table if not exists public.product_relationships (
  product_id uuid not null references public.products(id) on delete cascade,
  relationship_id uuid not null references public.relationships(id) on delete cascade,
  primary key (product_id, relationship_id)
);

create table if not exists public.product_occasions (
  product_id uuid not null references public.products(id) on delete cascade,
  occasion_id uuid not null references public.occasions(id) on delete cascade,
  primary key (product_id, occasion_id)
);

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references public.products(id) on delete set null,
  customer_name text not null,
  quantity integer not null default 1 check (quantity > 0),
  personal_message text,
  customization_details text,
  photo_path text,
  status text not null default 'new' check (status in ('new', 'contacted', 'completed', 'cancelled')),
  created_at timestamptz not null default now()
);

alter table public.products enable row level security;
alter table public.relationships enable row level security;
alter table public.occasions enable row level security;
alter table public.product_relationships enable row level security;
alter table public.product_occasions enable row level security;
alter table public.enquiries enable row level security;

create policy "Anyone can view active products" on public.products for select using (is_active = true);
create policy "Anyone can view relationships" on public.relationships for select using (true);
create policy "Anyone can view occasions" on public.occasions for select using (true);
create policy "Anyone can view product relationships" on public.product_relationships for select using (true);
create policy "Anyone can view product occasions" on public.product_occasions for select using (true);

-- Enquiries and product management will be written through authenticated server-side admin actions.
