import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigationLink',
  title: 'Lien de navigation',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label du lien de navigation',
      type: 'string',
    }),
    defineField({
      name: 'page',
      title: 'Référence du lien de navigation',
      type: 'reference',
      to: [{type: 'page'}],
    }),
  ],
  preview: {
    select: {
      title: 'label',
      pageTitle: 'page.title',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `${selection.pageTitle || 'Page non sélectionnée'}`,
      }
    },
  },
})
