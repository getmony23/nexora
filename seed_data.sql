-- Seed Data for Nexora Marketplace

-- 1. Insert Categories
INSERT INTO public.categories (name, slug, icon)
VALUES 
  ('Ready Websites', 'ready-websites', 'Globe'),
  ('SaaS Dashboards', 'saas-dashboards', 'Layout'),
  ('Landing Pages', 'landing-pages', 'Zap'),
  ('UI Kits', 'ui-kits', 'Palette'),
  ('Scripts & Tools', 'scripts-tools', 'Code')
ON CONFLICT (slug) DO NOTHING;

-- 2. Insert Sample Products (Note: In a real app, seller_id must be a real UUID from auth.users)
-- Since we don't have a real user ID yet, we'll leave this as a template for the user.
-- However, we can insert categories first as they don't depend on users.

-- Example of how to add a product manually after you register your first account:
/*
INSERT INTO public.products (seller_id, title, slug, description, price, category_id, tags)
VALUES (
  'YOUR_USER_ID_HERE', 
  'Nexora Premium Dashboard', 
  'nexora-premium-dashboard', 
  'The ultimate dashboard for SaaS applications.', 
  49.00, 
  (SELECT id FROM public.categories WHERE slug = 'saas-dashboards'),
  ARRAY['nextjs', 'tailwind', 'supabase']
);
*/
