create table if not exists public.gift_categories (id uuid primary key default gen_random_uuid(), name text unique not null, emoji text not null default '🎁', is_active boolean not null default true, created_at timestamptz not null default now());
alter table public.gift_categories enable row level security;
create policy "Anyone can view active gift categories" on public.gift_categories for select using (is_active = true);
create policy "Admins can manage gift categories" on public.gift_categories for all to authenticated using ((auth.jwt() -> 'user_metadata' ->> 'role') = 'admin') with check ((auth.jwt() -> 'user_metadata' ->> 'role') = 'admin');
