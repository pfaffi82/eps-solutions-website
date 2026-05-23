import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "E&P Solutions | ERP · Prozessoptimierung · Digital Marketing",
  description:
    "Ihr Odoo-Partner in Österreich. Wir modernisieren Ihre Geschäftsprozesse mit maßgeschneiderten ERP-Lösungen, Prozessmanagement und digitalem Marketing.",
  keywords: "Odoo, ERP, Prozessoptimierung, Digitalisierung, Österreich, Lean Management",
  openGraph: {
    title: "E&P Solutions",
    description: "Ihr Partner für ERP, Prozessoptimierung & digitales Marketing",
    url: "https://epsolutions.at",
    siteName: "E&P Solutions",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
