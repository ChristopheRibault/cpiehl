import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'actualitesSection',
  title: 'Section Actualités',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la section',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'actualites',
      title: 'Actualités',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'actualite'}]}],
      description: 'Sélectionne les actualités à afficher dans cette section',
    }),
  ],
})
