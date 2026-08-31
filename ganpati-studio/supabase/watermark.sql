create table if not exists public.site_settings (key text primary key, value jsonb not null default '{}'::jsonb, updated_at timestamptz not null default now());
alter table public.site_settings enable row level security;
create policy "Anyone can read watermark settings" on public.site_settings for select using (key = 'watermark');
create policy "Admins can manage site settings" on public.site_settings for all to authenticated using ((auth.jwt() -> 'user_metadata' ->> 'role') = 'admin') with check ((auth.jwt() -> 'user_metadata' ->> 'role') = 'admin');
