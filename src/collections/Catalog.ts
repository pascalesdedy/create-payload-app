import type { CollectionConfig } from 'payload'

const Catalog: CollectionConfig = {
  slug: 'catalog',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'category', 'inStock'],
    group: 'Catalog',
  },
  labels: {
    singular: 'Produk',
    plural: 'Daftar Produk'
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Electronics', value: 'electronics' },
        { label: 'Clothing', value: 'clothing' },
        { label: 'Books', value: 'books' },
        { label: 'Home & Kitchen', value: 'home-kitchen' },
        { label: 'Other', value: 'other' },
      ],
      required: true,
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      maxRows: 5,
    },
    {
      name: 'inStock',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}

export default Catalog
