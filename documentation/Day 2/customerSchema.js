export default {
    name: 'customer',
    type: 'document',
    fields: [
      { name: 'customerId', type: 'string', title: 'Customer ID' },
      { name: 'name', type: 'string', title: 'Name' },
      { name: 'email', type: 'string', title: 'Email' },
      { name: 'number', type: 'string', title: 'Phone Number' },
      { name: 'address', type: 'string', title: 'Address' },
    ]
  };