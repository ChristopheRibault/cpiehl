import { Actualite } from "@/sanity/schemas/actualite";
import Image from "next/image";
import Link from "next/link";

export function NewsCard({ actualite }: { actualite: Actualite }) {
  return (
    <article className="flex flex-col gap-4 p-4 w-64">
      {actualite.image?.asset?.url && (
        <Link href={actualite.link ?? ""} target="_blank">
          <Image
            src={actualite.image.asset.url}
            alt={actualite.image.alt || actualite.title}
            width={300}
            height={200}
            className="mb-2"
          />
        </Link>
      )}
      <h3 className="text-2xl font-bold mb-2">{actualite.title}</h3>
      {actualite.excerpt && <p className="mb-2">{actualite.excerpt}</p>}
      {actualite.date && (
        <p className="text-sm text-gray-500">
          {new Date(actualite.date).toLocaleDateString()}
        </p>
      )}
    </article>
  );
}
