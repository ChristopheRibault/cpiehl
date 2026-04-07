import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'boardMembersList',
  title: "Liste des membres du Conseil d'Administration",
  type: 'object',
  fields: [
    defineField({
      name: 'mainBoardMembers',
      title: "Membres du conseil d'administration",
      type: 'array',
      of: [{type: 'boardMember'}],
      description: "Sélectionne les membres de l'équipe principale à afficher dans cette section",
    }),
    defineField({
      name: 'secondaryBoardMembers',
      title: "Membres du conseil d'administration secondaires",
      type: 'array',
      of: [{type: 'boardMember'}],
      description: "Sélectionne les membres secondaires de l'équipe à afficher dans cette section",
    }),
  ],
  preview: {
    select: {
      mainBoardMembers: 'mainBoardMembers',
      secondaryBoardMembers: 'secondaryBoardMembers',
    },
    prepare(selection) {
      const count =
        (selection.mainBoardMembers?.length || 0) + (selection.secondaryBoardMembers?.length || 0)
      return {
        title: "Membres du Conseil d'Administration",
        subtitle: `${count} membre${count > 1 ? 's' : ''}`,
      }
    },
  },
})
