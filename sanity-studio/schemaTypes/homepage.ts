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
    defineField({
      name: 'programSection',
      title: 'Section Programme',
      type: 'programSection',
      description: 'Section avec titre et liste de programmes',
    }),
    defineField({
      name: 'partnersSection',
      title: 'Section Partenaires',
      type: 'partnersSection',
      description: 'Section avec titre et liste de partenaires',
    }),
  ],
  // @ts-ignore
  __experimental_actions: ['update', 'publish'], // disable 'create' & 'delete'
})
