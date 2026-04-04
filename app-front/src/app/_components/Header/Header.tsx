import { SiteSettings } from "@/sanity/settings";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./Navigation";

interface Props {
  settings: SiteSettings;
}

export const Header = ({ settings }: Props) => {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="flex flex-row flex-nowrap md:items-center md:justify-between gap-4 p-2 md:p-4 lg:p-6">
        <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-primary">
          {settings.siteTitle}
        </h1>
        <Link href="/" className="shrink-0">
          <Image
            src={settings.header.logo.asset.url}
            alt="Logo"
            width={200}
            height={200}
            className="w-16 sm:w-20 md:w-32 lg:w-48 h-auto"
          />
        </Link>
      </div>
      <Navigation items={settings.navigation} />
    </header>
  );
};
