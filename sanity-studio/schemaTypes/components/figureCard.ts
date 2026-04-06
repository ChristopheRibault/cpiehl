import {defineType} from 'sanity'

export default defineType({
  name: 'figureCard',
  title: 'Carte à chiffres',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Titre de la carte',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Contenu de la carte',
      type: 'richTextBlock',
    },
  ],
  preview: {
    select: {
      title: 'title',
      text: 'text',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.text.content[0]?.children[0]?.text || 'Pas de contenu',
      }
    },
  },
})
