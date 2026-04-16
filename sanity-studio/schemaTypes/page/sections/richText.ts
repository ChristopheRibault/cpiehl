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
                    name: 'linkType',
                    title: 'Type de lien',
                    type: 'string',
                    options: {
                      list: [
                        {title: 'Lien externe', value: 'external'},
                        {title: 'Lien interne', value: 'internal'},
                      ],
                      layout: 'radio',
                    },
                    validation: (Rule: any) => Rule.required(),
                  },
                  {
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    hidden: ({parent}: any) => parent?.linkType !== 'external',
                    validation: (Rule: any) =>
                      Rule.custom((value: any, context: any) => {
                        if (context.parent?.linkType === 'external' && !value) {
                          return 'URL requise pour un lien externe'
                        }
                        return true
                      }),
                  },
                  {
                    name: 'internalPage',
                    title: 'Page',
                    type: 'reference',
                    to: [{type: 'page'}],
                    hidden: ({parent}: any) => parent?.linkType !== 'internal',
                    validation: (Rule: any) =>
                      Rule.custom((value: any, context: any) => {
                        if (context.parent?.linkType === 'internal' && !value) {
                          return 'Page requise pour un lien interne'
                        }
                        return true
                      }),
                  },
                  {
                    name: 'external',
                    title: 'Ouvrir dans un nouvel onglet',
                    type: 'boolean',
                    hidden: ({parent}: any) => parent?.linkType !== 'external',
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
