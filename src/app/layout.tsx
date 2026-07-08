import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { LocationSearch } from "@/components/ui/LocationSearch";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  title: {
    default: "Alora Group | Commercial Laundry & Cleaning Services",
    template: "%s | Alora Group"
  },
  description: "Alora Group - Leading holding company providing commercial laundry, linen management, healthcare laundry, and professional home & office cleaning services in Indonesia.",
  metadataBase: new URL("https://wascenalora.com"),
  openGraph: {
    title: "Alora Group",
    description: "Complete commercial laundry, linen management, and cleaning solutions for B2B and B2C sectors. Precision, hygiene, and trust in every service.",
    url: "https://wascenalora.com",
    siteName: "Alora Group",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Alora Group",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alora Group | Commercial Laundry & Cleaning",
    description: "Complete commercial laundry, linen management, and cleaning solutions for B2B and B2C sectors.",
    images: ["/og-image.webp"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = "G-DQZBTCPW5B";

  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary overflow-x-hidden flex flex-col">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
        <LanguageProvider>
          <ScrollToTop />
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
          <LocationSearch />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
