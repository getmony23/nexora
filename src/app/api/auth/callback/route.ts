export const dynamic = 'force-dynamic';
import { createSupabaseServerClient } from '@/lib/supabase-server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const errorParam = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');
  
  const next = searchParams.get('next') ?? '/';

  if (errorParam) {
    return new NextResponse(`Authentication failed: ${errorParam} - ${errorDescription}`, { status: 400 });
  }

  if (code) {
    try {
      const supabase = await createSupabaseServerClient();
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (!error) {
        return NextResponse.redirect(`${origin}${next}`);
      }
      return new NextResponse(`Supabase exchange error: ${error.message}`, { status: 400 });
    } catch (err) {
      return new NextResponse(`Server exception: ${err instanceof Error ? err.message : String(err)}`, { status: 500 });
    }
  }

  // If no code, check if it's an implicit flow (hash fragment)
  return new NextResponse(`
    <html>
      <head>
        <title>Authenticating...</title>
      </head>
      <body style="background: #030712; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; color: white; font-family: sans-serif;">
        <div id="status">Checking authentication token...</div>
        <script>
          if (window.location.hash && window.location.hash.includes('access_token')) {
            document.getElementById('status').innerText = "Token found, redirecting...";
            window.location.href = '/auth/implicit-callback' + window.location.hash;
          } else if (window.location.hash && window.location.hash.includes('error')) {
            document.getElementById('status').innerText = "Auth Error: " + window.location.hash;
          } else {
            document.getElementById('status').innerText = "No code or token found. Please try logging in again.";
            setTimeout(() => { window.location.href = '/login?error=missing-auth-token'; }, 3000);
          }
        </script>
      </body>
    </html>
  `, { 
    headers: { 'Content-Type': 'text/html' } 
  });
}
