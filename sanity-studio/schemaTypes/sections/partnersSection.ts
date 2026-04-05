import {defineType} from 'sanity'

export default defineType({
  name: 'partnersSection',
  title: 'Section Partenaires',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Titre de la section',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'partners',
      title: 'Partenaires',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'partner'}]}],
      description: 'Sélectionne les partenaires à afficher dans cette section',
    },
  ],
})
