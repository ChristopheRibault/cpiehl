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
              name: 'caption',
              title: 'Légende',
              type: 'richTextBlock',
            },
          ],
          preview: {
            select: {
              caption: 'caption',
              image: 'image',
            },
            prepare({image, caption}) {
              const captionText = caption?.content
                ?.filter((block: {_type: string}) => block._type === 'block')
                ?.map((block: {children: {text: string}[]}) =>
                  block.children?.map((child) => child.text).join(''),
                )
                ?.join(' / ')
              return {
                title: captionText.length > 50 ? captionText.substring(0, 47) + '...' : captionText,
                media: image,
              }
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
