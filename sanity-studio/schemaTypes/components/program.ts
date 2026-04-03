import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'program',
  title: 'Programme',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pdfDocument',
      type: 'object',
      fields: [
        {name: 'file', type: 'file', title: 'Fichier PDF'},
        {name: 'preview', type: 'image', title: 'Aperçu (image)'},
      ],
    }),
    defineField({
      name: 'link',
      type: 'object',
      fields: [
        {name: 'pageRef', type: 'reference', to: [{type: 'page'}]},
        {name: 'label', type: 'string', title: 'Label du lien'},
      ],
    }),
  ],
})
