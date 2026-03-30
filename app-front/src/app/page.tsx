import { client } from "@/sanity/client";
import Image from "next/image";
import Link from "next/link";
import { Section } from "./_components";

const HOMEPAGE_QUERY = `*[_type == "homepage"][0]{
  _id,
  title,
  actualitesSection {
    title,
    actualites[]-> {
      _id,
      title,
      excerpt,
      image{asset->{url}, alt},
      link,
      date
    }
  }
}`;
const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const homepage = await client.fetch(HOMEPAGE_QUERY, {}, options);
  console.log(homepage);

  return (
    <main className="min-h-screen w-full">
      {homepage?.actualitesSection && (
        <Section title={homepage.actualitesSection.title}>
          <div className="flex flex-row flex-wrap gap-8 justify-center">
            {homepage.actualitesSection.actualites?.map((actualite: any) => (
              <div key={actualite._id} className="flex flex-col gap-4 p-4 w-64">
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
                {actualite.excerpt && (
                  <p className="mb-2">{actualite.excerpt}</p>
                )}
                {actualite.date && (
                  <p className="text-sm text-gray-500">
                    {new Date(actualite.date).toLocaleDateString()}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}
    </main>
  );
}
