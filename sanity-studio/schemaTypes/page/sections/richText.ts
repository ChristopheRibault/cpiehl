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
            {title: 'Titre 1', value: 'h3'},
            {title: 'Titre 2', value: 'h4'},
            {title: 'Citation', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Gras', value: 'strong'},
              {title: 'Italique', value: 'em'},
            ],
            // Ajouter les annotations
            annotations: [
              {
                title: 'Lien',
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
              {
                title: 'Couleur',
                name: 'color',
                type: 'object',
                fields: [
                  {
                    name: 'colorValue',
                    title: 'Couleur',
                    type: 'color',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texte alternatif',
            },
            {
              name: 'position',
              title: 'Position de l’image',
              type: 'string',
              options: {
                list: [
                  {title: 'Gauche', value: 'left'},
                  {title: 'Centré', value: 'center'},
                  {title: 'Droite', value: 'right'},
                ],
                layout: 'radio',
              },
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare(selection) {
      const textPreview = selection.content
        ? selection.content
            .filter((block: any) => block._type === 'block')
            .map((block: any) => block.children.map((child: any) => child.text).join(''))
            .join(' ')
        : 'Aucun contenu'
      return {
        title: 'Bloc de texte riche',
        subtitle: textPreview.length > 50 ? textPreview.substring(0, 47) + '...' : textPreview,
      }
    },
  },
})
