import { NewsCard, Section } from "./_components";
import { getHomepage } from "@/sanity/homepage";

export default async function Homepage() {
  const homepage = await getHomepage();

  return (
    <main className="min-h-screen w-full">
      {homepage?.actualitesSection && (
        <Section title={homepage.actualitesSection.title}>
          <div className="flex flex-row flex-wrap gap-8 justify-center">
            {homepage.actualitesSection.actualites?.map((actualite) => (
              <NewsCard key={actualite._id} actualite={actualite} />
            ))}
          </div>
        </Section>
      )}
    </main>
  );
}
