export default {
    name: 'product',
    type: 'document',
    fields: [
      { name: 'name', type: 'string', title: 'Product Name' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'image', type: 'image', title: 'Product Image' },
      { name: 'stock', type: 'number', title: 'Stock Level' },
    ]
  };