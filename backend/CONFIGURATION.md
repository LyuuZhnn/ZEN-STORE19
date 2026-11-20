# Backend integration status

This package does not include the original Supabase project URL, schema, RLS policies, Storage buckets, or authentication configuration. No second database has been created.

Before enabling production features:

1. Retrieve the original project configuration and schema from the existing owner/admin.
2. Audit tables, policies, authentication providers, and Storage buckets before changing anything.
3. Add only the Supabase project URL and publishable/anon key to the public frontend config. Never put a service-role key in this repository.
4. Implement server-side validation for order totals, stock, vouchers, customer identity, and admin role checks.
5. Protect every admin operation with authentication and Row Level Security. Hiding `/admin/` links is not authorization.
6. Test with staging data before using real customer data.

`assets/js/zen-config.js` currently keeps `supabase.url` and `supabase.anonKey` empty intentionally. Login, Register, newsletter delivery, contact submission, order persistence, and admin CRUD therefore remain unavailable in production mode.
