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
      name: 'header',
      title: 'En-tête',
      type: 'object',
      fields: [
        defineField({
          name: 'logo',
          title: 'Logo',
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'meta',
      title: 'Méta données',
      type: 'object',
      fields: [
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
      ],
    }),
    defineField({
      name: 'chartColors',
      title: 'Charte graphique',
      type: 'object',
      fields: [
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
      ],
    }),
  ],
  // @ts-expect-error
  __experimental_actions: ['update', 'publish'], // singleton
})
