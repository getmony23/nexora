"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseClient } from "@/lib/supabase";

export default function ImplicitCallbackPage() {
  const router = useRouter();
  const supabase = createSupabaseClient();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleAuth = async () => {
      try {
        // give Supabase client a moment to parse the hash fragment and set cookies
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) throw sessionError;
        
        if (session) {
          router.push("/");
        } else {
          throw new Error("No session found. Please try again.");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Authentication failed");
        setTimeout(() => router.push("/login"), 3000);
      }
    };

    handleAuth();
  }, [router, supabase]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 text-center bg-background">
        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl">
          <p>Authentication error: {error}</p>
          <p className="text-sm mt-2 opacity-80">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-indigo"></div>
    </div>
  );
}
