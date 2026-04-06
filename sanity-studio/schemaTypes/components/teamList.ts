import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'teamList',
  title: "Liste des membres de l'équipe",
  type: 'object',
  fields: [
    defineField({
      name: 'teamMembers',
      title: "Membres de l'équipe",
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'teamMember',
          title: 'Membre de l’équipe',
          fields: [
            defineField({
              name: 'firstname',
              title: 'Prénom du membre',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'lastname',
              title: 'Nom du membre',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'role',
              title: 'Rôle du membre',
              type: 'array',
              of: [{type: 'string'}],
              description:
                'Rôle(s) du membre au sein de l’équipe (ex : Président, Trésorier, etc.)',
            }),
            defineField({
              name: 'email',
              title: 'Email du membre',
              type: 'string',
              validation: (Rule) =>
                Rule.email().error({message: 'Veuillez entrer une adresse email valide'}),
            }),
            defineField({
              name: 'photo',
              title: 'Photo du membre',
              type: 'image',
            }),
            defineField({
              name: 'avatar',
              title: 'Avatar du membre',
              type: 'image',
            }),
          ],
          preview: {
            select: {
              firstname: 'firstname',
              lastname: 'lastname',
              role: 'role',
              photo: 'photo',
            },
            prepare(selection) {
              return {
                title: `${selection.firstname} ${selection.lastname}`,
                subtitle: selection.role ? selection.role.join(', ') : '',
                media: selection.photo,
              }
            },
          },
        },
      ],
      description: "Sélectionne les membres de l'équipe à afficher dans cette section",
    }),
  ],
  preview: {
    select: {
      teamMembers: 'teamMembers',
    },
    prepare(selection) {
      return {
        title: 'Section Équipe',
        subtitle: `${selection.teamMembers?.length || 0} membre${selection.teamMembers?.length > 1 ? 's' : ''}`,
        media: selection.teamMembers?.[0]?.photo,
      }
    },
  },
})
