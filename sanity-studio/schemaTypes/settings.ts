import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Configuration du site',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Titre du site',
      type: 'string',
    }),
    defineField({
      name: 'shortTitle',
      title: 'Titre court du site',
      type: 'string',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Description du site',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'primaryColor',
      title: 'Couleur principale',
      type: 'color',
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Couleur secondaire',
      type: 'color',
    }),
    defineField({
      name: 'tertiaryColor',
      title: 'Couleur tertiaire',
      type: 'color',
    }),
  ],
  // @ts-expect-error
  __experimental_actions: ['update', 'publish'], // singleton
})
