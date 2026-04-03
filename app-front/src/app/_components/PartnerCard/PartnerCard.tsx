import { Partner } from "@/sanity/schemas/partner";
import Image from "next/image";

export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <a
      href={partner.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-2 md:p-4 w-40 transition-shadow duration-300"
    >
      <Image
        src={partner.logo.asset.url}
        alt={partner.logo.alt || partner.name}
        className="max-h-16 object-contain"
        width={128}
        height={128}
      />
    </a>
  );
}