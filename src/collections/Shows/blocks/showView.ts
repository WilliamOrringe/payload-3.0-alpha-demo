import { Block, CollectionConfig } from 'payload/types'

export const ShowViewBlock: Block = {
  slug: 'ShowView', // required
  interfaceName: 'ShowViewBlock', // optional
  fields: [
    // required
    {
      name: 'quoteHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'quoteText',
      type: 'text',
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
