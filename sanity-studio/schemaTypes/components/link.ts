import {defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Lien',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
  ],
})
