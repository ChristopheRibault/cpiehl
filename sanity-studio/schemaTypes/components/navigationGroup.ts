import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigationGroup',
  title: 'Groupe de navigation',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: "Label de l'élément de navigation",
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'children',
      title: 'Sous-éléments de navigation',
      type: 'array',
      of: [{type: 'navigationLink'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      children: 'children',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `${selection.children?.length || 0} élément(s)`,
      }
    },
  },
})
