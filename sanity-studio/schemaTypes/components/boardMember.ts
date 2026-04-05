import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'boardMember',
  title: 'Membre du conseil',
  type: 'object',
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
      type: 'string',
      description:
        'Rôle du membre au sein du conseil d’administration (ex : Président, Trésorier, etc.)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'Ville du membre',
      type: 'string',
      description: 'Ville du membre',
    }),
    defineField({
      name: 'complement',
      title: 'Complément d’information',
      type: 'string',
      description: 'Informations complémentaires sur le membre (ex : représentant de, etc.)',
    }),
  ],
  preview: {
    select: {
      firstname: 'firstname',
      lastname: 'lastname',
      role: 'role',
    },
    prepare(selection) {
      return {
        title: `${selection.firstname} ${selection.lastname}`,
        subtitle: selection.role,
      }
    },
  },
})
