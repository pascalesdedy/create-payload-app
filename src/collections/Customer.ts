import type { CollectionConfig } from 'payload';

const Customer: CollectionConfig = {
  slug: 'customer',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['id', 'name', 'email', 'phone', 'address', 'status', 'createdAt'],
    group: 'Customers',
  },
  fields: [
    {
      name: 'name',
      label: 'Nama',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'phone',
      label: 'Nomor Telepon',
      type: 'text',
      required: false,
    },
    {
      name: 'address',
      label: 'Alamat',
      type: 'textarea',
      required: false,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: [
        { label: 'Aktif', value: 'active' },
        { label: 'Nonaktif', value: 'inactive' }
      ],
      defaultValue: 'active',
      required: true,
    }
  ],
  timestamps: true // otomatis menambah createdAt & updatedAt
};

export default Customer;