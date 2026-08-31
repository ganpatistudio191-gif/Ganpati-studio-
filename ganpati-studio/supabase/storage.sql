insert into storage.buckets (id, name, public) values ('studio-images', 'studio-images', true) on conflict (id) do nothing;
create policy "Public can view studio images" on storage.objects for select using (bucket_id = 'studio-images');
create policy "Admins can upload studio images" on storage.objects for insert to authenticated with check (bucket_id = 'studio-images' and (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin');
create policy "Admins can delete studio images" on storage.objects for delete to authenticated using (bucket_id = 'studio-images' and (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin');
