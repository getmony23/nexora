import AuthForm from "@/components/auth/AuthForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-background">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-indigo/10 blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-purple/10 blur-[120px] -z-10"></div>

      <Link href="/" className="flex items-center gap-2 group mb-12">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-indigo to-brand-purple flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <span className="text-white font-bold text-xl">N</span>
        </div>
        <span className="text-2xl font-bold tracking-tight text-white font-outfit">Nexora</span>
      </Link>

      <AuthForm type="register" />
    </div>
  );
}
