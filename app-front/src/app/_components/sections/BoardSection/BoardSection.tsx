import { type BoardSection } from "@/sanity/schemas/sections/boardSection";
import { Section } from "../../Section/Section";

export function BoardSection({ section }: { section: BoardSection }) {
  return (
    <Section title={section.title}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8 border-b border-gray-200 pb-8">
        {section.mainBoardMembers.map((member) => (
          <div key={member.lastname} className="p-4">
            <p className="text-xl text-primary font-bold">{member.role}</p>
            <h3 className="text-xl font-semibold mb-2">
              {member.firstname} {member.lastname.toUpperCase()}
            </h3>
            {member.complement && (
              <p className="text-sm text-secondary">{member.complement}</p>
            )}
            {member.city && (
              <p className="text-sm text-secondary">{member.city}</p>
            )}
          </div>
        ))}
      </div>
      {section.secondaryBoardMembers.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {section.secondaryBoardMembers.map((member, index) => (
            <div key={member.lastname} className="p-4">
              <h3 className="text-xl font-semibold">
                {member.firstname} {member.lastname.toUpperCase()}
              </h3>
              {member.role && (
                <p className="text-sm text-secondary mb-2">{member.role}</p>
              )}
              {member.complement && (
                <p className="text-sm text-secondary">{member.complement}</p>
              )}
              {member.city && (
                <p className="text-sm text-secondary">{member.city}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
