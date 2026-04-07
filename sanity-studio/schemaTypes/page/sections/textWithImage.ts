import {defineType} from 'sanity'

export default defineType({
  name: 'textWithImage',
  title: 'Texte avec image',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Texte de la section',
      type: 'richTextBlock',
    },
    {
      name: 'image',
      title: 'Image de la section',
      type: 'image',
    },
    {
      name: 'link',
      title: "Lien de l'image",
      type: 'object',
      fields: [
        {
          name: 'url',
          title: 'URL',
          type: 'url',
        },
        {
          name: 'file',
          title: 'Fichier',
          type: 'file',
        },
      ],
      validation: (Rule) =>
        Rule.custom((fields: {url?: string; file?: string}) => {
          if (fields?.url && fields?.file) {
            return 'Veuillez choisir soit une URL, soit un fichier'
          }
          return true
        }),
    },
    {
      name: 'imagePosition',
      title: "Position de l'image",
      type: 'string',
      options: {
        list: [
          {title: 'Gauche', value: 'left'},
          {title: 'Droite', value: 'right'},
        ],
        layout: 'radio',
      },
    },
  ],
  preview: {
    select: {
      text: 'text',
      image: 'image',
      link: 'link',
    },
    prepare(selection) {
      const {text, image, link} = selection
      const url = link?.url
      const file = link?.file
      console.log(link)

      return {
        title: text?.content[0]?.children[0]?.text || 'Texte avec image',
        subtitle: url ?? (file?.asset?._ref ? 'Avec fichier' : 'Aucun lien'),
        media: image,
      }
    },
  },
})
