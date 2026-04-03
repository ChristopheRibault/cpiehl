import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactSection',
  title: 'Section Contact',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la section',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactInfo',
      title: 'Informations de contact',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Nom',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.email().required(),
        }),
        defineField({
          name: 'phone',
          title: 'Téléphone',
          type: 'string',
          validation: (Rule) => Rule.required().regex(/^[\d\s\-+()]+$/),
        }),
        defineField({
          name: 'address',
          title: 'Adresse ligne 1',
          type: 'string',
        }),
        defineField({
          name: 'address2',
          title: 'Adresse ligne 2',
          type: 'string',
        }),
      ],
      description: 'Sélectionne les informations de contact à afficher dans cette section',
    }),
  ],
})
