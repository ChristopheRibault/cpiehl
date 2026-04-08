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
      validation: (Rule) => Rule.required().min(1),
    },
  ],
  preview: {
    select: {
      cards: 'cards',
    },
    prepare(selection) {
      const cardCount = selection.cards.length || 0
      const media = selection.cards[0].icon || selection.cards[0].image
      return {
        title: `Grille de cartes (${cardCount} carte${cardCount > 1 ? 's' : ''})`,
        media,
      }
    },
  },
})
