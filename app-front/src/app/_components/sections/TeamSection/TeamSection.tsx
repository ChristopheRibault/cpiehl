import { type TeamSection } from "@/sanity/schemas/sections/teamSection";
import { Section } from "../../Section/Section";
import Image from "next/image";
import Link from "next/link";

export function TeamSection({ section }: { section: TeamSection }) {
  return (
    <Section title={section.title}>
      <div className="flex flex-col items-center gap-6 w-full">
        {section.teamMembers.map((member) => (
          <article
            key={member.email}
            className="max-w-75 sm:max-w-full sm:w-full flex flex-col sm:flex-row justify-between p-4 border-primary border-3 rounded-3xl"
          >
            {member.photo && (
              <div className="w-full sm:w-[30%] md:w-[20%] mb-4 sm:mb-0">
                <Image
                  src={member.photo.asset.url}
                  alt={`${member.firstname} ${member.lastname}`}
                  className="w-full sm:w-48 h-full object-cover rounded-lg border-2 border-secondary shadow-2xl shadow-black/50"
                  width={200}
                  height={200}
                />
              </div>
            )}
            <div className="w-full sm:w-[40%] md:w-[50%] flex flex-col justify-between mb-4 sm:mb-0">
              <div>
                <h3 className="text-2xl font-semibold mb-4 w-full">
                  {member.firstname} {member.lastname.toUpperCase()}
                </h3>
                {member.role?.map((role) => (
                  <p key={role} className="text-secondary text-xl">
                    {role}
                  </p>
                ))}
              </div>
              <Link
                href={`mailto:${member.email}`}
                className="text-lg underline font-bold text-blue-600"
              >
                {member.email}
              </Link>
            </div>
            {member.avatar && (
              <div className="flex items-center justify-center sm:justify-end rounded w-full sm:w-[20%]">
                <Image
                  src={member.avatar.asset.url}
                  alt={`${member.firstname} ${member.lastname}`}
                  className="object-cover"
                  width={150}
                  height={150}
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
