import { NewsCard, ProgramCard, Section, PartnerCard } from "./_components";
import { getHomepage } from "@/sanity/homepage";
import { Carousel } from "@/lib/ui";

export default async function Homepage() {
  const homepage = await getHomepage();

  return (
    <main className="min-h-screen w-full">
      {homepage?.actualitesSection && (
        <Section title={homepage.actualitesSection.title}>
          <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-center lg:items-start">
            {homepage.actualitesSection.actualites?.map((actualite) => (
              <NewsCard key={actualite._id} actualite={actualite} />
            ))}
          </div>
        </Section>
      )}
      {homepage?.programSection && (
        <Section title={homepage.programSection.title}>
          <div className="flex flex-col gap-8 justify-center items-center">
            {homepage.programSection.programs?.map((program) => (
              <ProgramCard key={program._id} program={program} />
            ))}
          </div>
        </Section>
      )}
      {homepage?.partnersSection && (
        <Section title={homepage.partnersSection.title}>
          <Carousel>
            {homepage.partnersSection.partners?.map((partner) => (
              <div key={partner._id} >
                <PartnerCard partner={partner} />
              </div>
            ))}
          </Carousel>
        </Section>
      )}
    </main>
  );
}
