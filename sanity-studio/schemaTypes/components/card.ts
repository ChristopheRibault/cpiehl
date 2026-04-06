import {defineType} from 'sanity'

export default defineType({
  name: 'card',
  title: 'Carte',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Titre de la carte',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description de la carte',
      type: 'richTextBlock',
    },
    {
      name: 'image',
      title: 'Image de la carte',
      type: 'image',
    },
    {
      name: 'links',
      title: 'Liens de la carte',
      type: 'array',
      of: [{type: 'link'}],
      validation: (Rule) => Rule.max(3),
    },
  ],
})
