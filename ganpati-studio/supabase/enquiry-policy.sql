create policy "Visitors can submit enquiries" on public.enquiries for insert to anon, authenticated with check (char_length(customer_name) between 1 and 120 and quantity > 0);
create policy "Admins can manage enquiries" on public.enquiries for all to authenticated using ((auth.jwt() -> 'user_metadata' ->> 'role') = 'admin') with check ((auth.jwt() -> 'user_metadata' ->> 'role') = 'admin');
