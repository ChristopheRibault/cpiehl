import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'teamList'},
        {type: 'boardMembersList'},
        {type: 'richTextBlock'},
        {type: 'cardGrid'},
        {type: 'figureCard'},
        {type: 'imagesGallery'},
        // Ajoute d’autres types de sections selon tes besoins
      ],
    }),
    // Ajoute d’autres champs selon tes besoins
  ],
})
