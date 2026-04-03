import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Partenaire',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom du partenaire',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo du partenaire',
      type: 'image',
    }),
    defineField({
      name: 'link',
      title: 'Lien vers le site du partenaire',
      type: 'url',
    }),
  ],
})
