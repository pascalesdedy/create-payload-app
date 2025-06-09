import type { CollectionConfig } from 'payload';

const Voucher: CollectionConfig = {
  slug: 'voucher',
  admin: {
    useAsTitle: 'voucherName',
    defaultColumns: ['id', 'voucherName', 'discountAmount', 'startDate', 'endDate', 'status'],
    group: 'Promo',
  },
  fields: [
    {
      name: 'voucherName',
      label: 'Voucher Name',
      type: 'text',
      required: true,
    },
    {
      name: 'discountAmount',
      label: 'Discount Amount',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'startDate',
      label: 'Start Date',
      type: 'date',
      required: true,
    },
    {
      name: 'endDate',
      label: 'End Date',
      type: 'date',
      required: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
        { label: 'Expired', value: 'expired' },
      ],
      required: true,
      defaultValue: 'inactive',
    },
  ],
};

export default Voucher;