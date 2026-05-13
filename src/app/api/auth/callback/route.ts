export const dynamic = 'force-dynamic';
import { createSupabaseServerClient } from '@/lib/supabase-server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  // if "next" is in search params, use it as the redirection URL
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
    console.error('Auth error:', error);
  }

  // If no code, check if it's an implicit flow (hash fragment)
  return new NextResponse(`
    <html>
      <head>
        <title>Authenticating...</title>
      </head>
      <body style="background: #030712; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;">
        <script>
          if (window.location.hash && window.location.hash.includes('access_token')) {
            window.location.href = '/auth/implicit-callback' + window.location.hash;
          } else {
            window.location.href = '/login?error=auth-code-error';
          }
        </script>
      </body>
    </html>
  `, { 
    headers: { 'Content-Type': 'text/html' } 
  });
}
