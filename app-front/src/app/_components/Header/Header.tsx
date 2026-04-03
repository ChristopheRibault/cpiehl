import { SiteSettings } from "@/sanity/settings";
import Image from "next/image";
import Link from "next/link";

interface Props {
  settings: SiteSettings;
}

export const Header = ({ settings }: Props) => {
  return (
    <header className="w-full py-4 px-2 text-center">
      <div className="flex flex-row justify-around items-center">
        <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-primary w-[70%] sm:w-[60%] text-left">{settings.siteTitle}</h1>
        <Link href="/">
          <Image src={settings.header.logo.asset.url} alt="Logo" width={200} height={200} className="w-20 sm:w-32 md:w-48 lg:w-72" />
          </Link>
      </div>
    </header>
  );
};
