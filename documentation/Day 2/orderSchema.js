export default {
    name: 'order',
    type: 'document',
    fields: [
      { name: 'orderId', type: 'string', title: 'Order ID' },
      { name: 'customerId', type: 'reference', to: [{ type: 'customer' }], title: 'Customer ID' },
      { name: 'products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }], title: 'Products' },
      { name: 'totalPrice', type: 'number', title: 'Total Price' },
      { name: 'paymentMethod', type: 'string', title: 'Payment Method' },
      { name: 'status', type: 'string', title: 'Status' },
    ]
  };