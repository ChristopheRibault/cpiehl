import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'richTextBlock',
  title: 'Bloc de texte riche',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
            // Ajouter les annotations
            annotations: [
              {
                title: 'Link',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (Rule: any) =>
                      Rule.required().uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                  {
                    name: 'external',
                    title: 'Ouvrir dans un nouvel onglet',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
  ],
})
