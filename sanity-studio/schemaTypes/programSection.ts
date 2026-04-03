import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'programSection',
  title: 'Section Programme',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la section',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'programs',
      title: 'Programmes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'program'}]}],
      description: 'Sélectionne les programmes à afficher dans cette section',
    }),
  ],
})
