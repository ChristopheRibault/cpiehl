import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getSiteSettings } from "@/sanity/settings";
import { Header } from "./_components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: settings?.meta.shortTitle || "CPIE HL",
    description:
      settings?.meta.siteDescription ||
      "Site de l'association CPIE Haut-Languedoc",
    icons: settings?.meta.favicon?.asset?.url
      ? {
          icon: settings.meta.favicon.asset.url,
        }
      : undefined,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={
          {
            // Injection des couleurs Sanity dans les variables CSS (utilisation du champ .hex)
            ...(settings?.chartColors.primaryColor && {
              "--primary-color": settings.chartColors.primaryColor.hex,
            }),
            ...(settings?.chartColors.secondaryColor && {
              "--secondary-color": settings.chartColors.secondaryColor.hex,
            }),
          } as React.CSSProperties
        }
      >
        <Header settings={settings} />
        {children}
      </body>
    </html>
  );
}
