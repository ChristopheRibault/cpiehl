import { client } from "@/sanity/client";
import Image from "next/image";
import Link from "next/link";

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
    <main className="container min-h-screen w-full p-8">
      <h1 className="text-4xl font-bold mb-8 text-primary">
        {homepage?.title}
      </h1>
      {homepage?.actualitesSection && (
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">
            {homepage.actualitesSection.title}
          </h2>
          <div className="flex flex-row flex-wrap gap-8">
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
        </section>
      )}
    </main>
  );
}
