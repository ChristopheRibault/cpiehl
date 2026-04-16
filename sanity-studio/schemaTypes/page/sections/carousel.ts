import {defineType} from 'sanity'

export default defineType({
  name: 'carousel',
  title: 'Carrousel',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'category',
              title: 'Catégorie',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Titre de la slide',
              type: 'string',
            },
            {
              name: 'subtitle',
              title: 'Sous-titre de la slide',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'slides.0.image',
    },
    prepare: ({title, image}) => ({
      title,
      media: image,
    }),
  },
})
