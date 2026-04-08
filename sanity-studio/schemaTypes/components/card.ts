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
      description: 'Image principale de la carte placée sous le titre (optionnelle)',
      type: 'image',
    },
    {
      name: 'icon',
      title: 'Icône de la carte',
      description: 'Icône placée à côté du titre (optionnel)',
      type: 'image',
    },
    {
      name: 'links',
      title: 'Liens de la carte',
      description:
        'Liste de liens associés à la carte affichés sous forme de boutons (optionnels, maximum 3)',
      type: 'array',
      of: [{type: 'link'}],
      validation: (Rule) => Rule.max(3),
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
      icon: 'icon',
    },
    prepare(selection) {
      const {title, image, icon} = selection
      return {
        title,
        media: icon || image,
      }
    },
  },
})
