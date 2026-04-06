import {defineType} from 'sanity'

export default defineType({
  name: 'imagesGallery',
  title: "Galerie d'images",
  type: 'object',
  fields: [
    {
      name: 'images',
      title: 'Images de la galerie',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      images: 'images',
    },
    prepare(selection) {
      const {images} = selection
      const count = images?.length || 0
      return {
        title: `Galerie d'images (${count} image${count === 1 ? '' : 's'})`,
        media: images?.[0],
      }
    },
  },
})
