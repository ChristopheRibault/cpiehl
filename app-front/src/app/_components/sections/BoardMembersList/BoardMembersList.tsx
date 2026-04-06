import { type BoardMembersList } from "@/sanity/schemas/sections/boardMembersList";

export function BoardMembersList({ section }: { section: BoardMembersList }) {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8 border-b border-gray-200 pb-8">
        {section.mainBoardMembers.map((member) => (
          <li key={member.lastname} className="p-4">
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
          </li>
        ))}
      </ul>
      {section.secondaryBoardMembers.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {section.secondaryBoardMembers.map((member, index) => (
            <li key={member.lastname} className="p-4">
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
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
