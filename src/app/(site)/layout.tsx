import { AuthProvider } from "@/components/auth-provider";
import { SiteHeader } from "@/components/layouts/site/header/site-header";
import { MobileNav } from "@/components/layouts/site/header/mobile-nav";
import { SiteFooter } from "@/components/layouts/site/footer/site-footer";
import { MobileFooter } from "@/components/layouts/site/footer/mobile-footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <MobileNav />
        <div className="hidden md:block">
          <SiteFooter />
        </div>
        <MobileFooter />
      </div>
    </AuthProvider>
  );
}
