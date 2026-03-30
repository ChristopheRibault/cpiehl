import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getSiteSettings } from "@/sanity/settings";

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
    title: settings?.shortTitle || "CPIE HL",
    description:
      settings?.siteDescription || "Site de l'association CPIE Haut-Languedoc",
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
            ...(settings?.primaryColor && {
              "--primary-color": settings.primaryColor.hex,
            }),
            ...(settings?.secondaryColor && {
              "--secondary-color": settings.secondaryColor.hex,
            }),
            ...(settings?.tertiaryColor && {
              "--tertiary-color": settings.tertiaryColor.hex,
            }),
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
