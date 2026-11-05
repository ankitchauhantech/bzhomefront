import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TopLayoutSwitcher } from "@/components/top-layout-switcher";
import { LayoutProvider } from "@/context/layout-context";

export const metadata: Metadata = {
  title: "Bravo Zulu Homefront Alliance | Dallas, Texas",
  description: "Veterans Unite: Impact Beyond Service. Official IRS 501(c)(19) Veterans Organization.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-slate-900 bg-white">
        <LayoutProvider>
          {/* Top Demo Layout Switcher - Absolute Top of the page */}
          <TopLayoutSwitcher />
          <Header />
          <main>{children}</main>
          <Footer />
        </LayoutProvider>
      </body>
    </html>
  );
}
