import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'actualitesSection',
      title: 'Section Actualités',
      type: 'actualitesSection',
      description: 'Section avec titre et liste d’actualités',
    }),
  ],
  // @ts-ignore
  __experimental_actions: ['update', 'publish'], // disable 'create' & 'delete'
})
