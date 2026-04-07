import {defineType} from 'sanity'

export default defineType({
  name: 'cardGrid',
  title: 'Grille de cartes',
  type: 'object',
  fields: [
    {
      name: 'cards',
      title: 'Cartes',
      type: 'array',
      of: [{type: 'card'}],
    },
  ],
  preview: {
    select: {
      cards: 'cards',
    },
    prepare(selection) {
      const cardCount = selection.cards?.length || 0
      return {
        title: `Grille de cartes (${cardCount} carte${cardCount > 1 ? 's' : ''})`,
      }
    },
  },
})
