import { NewsCard, ProgramCard, Section, PartnerCard } from "./_components";
import { getHomepage } from "@/sanity/homepage";
import { Carousel } from "@/lib/ui";
import Image from "next/image";

export default async function Homepage() {
  const homepage = await getHomepage();

  return (
    <main className="min-h-screen w-full">
      {homepage?.banner && (
        <Carousel navigationPosition="over">
          {homepage.banner.map((image, index) => (
            <div
              key={image.asset.url}
              className="flex-[0_0_100%] h-32 md:h-48 lg:h-72 overflow-hidden relative"
            >
              <Image
                src={image.asset.url}
                alt={image.alt || `Banner ${index + 1}`}
                className="w-full h-full object-cover"
                fill
                priority={index === 0}
              />
            </div>
          ))}
        </Carousel>
      )}
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
          <Carousel navigationPosition="bottom">
            {homepage.partnersSection.partners?.map((partner) => (
              <div key={partner._id}>
                <PartnerCard partner={partner} />
              </div>
            ))}
          </Carousel>
        </Section>
      )}
      {homepage?.contactSection && (
        <Section title={homepage.contactSection.title}>
          <div className="flex flex-col gap-8 items-center w-lg">
            <div className="flex flex-col justify-center items-start">
              <h3 className="text-2xl font-bold mb-2">
                {homepage.contactSection.contactInfo.name}
              </h3>
              {homepage.contactSection.contactInfo.address && (
                <p>{homepage.contactSection.contactInfo.address}</p>
              )}
              {homepage.contactSection.contactInfo.address2 && (
                <p>{homepage.contactSection.contactInfo.address2}</p>
              )}
              <p>{homepage.contactSection.contactInfo.email}</p>
            </div>
            <p>Tel : {homepage.contactSection.contactInfo.phone}</p>
          </div>
        </Section>
      )}
    </main>
  );
}
