// ...existing code...
    const order = {
        name: 'order',
        title: 'Order',
        type: 'document',
        fields: [
            {
                name: 'fullName',
                title: 'Full Name',
                type: 'string'
            },
            {
                name: 'email',
                title: 'Email',
                type: 'string'
            },
            {
                name: 'address',
                title: 'Address',
                type: 'string'
            },
            {
                name: 'city',
                title: 'City',
                type: 'string'
            },
            {
                name: 'postalCode',
                title: 'Postal Code',
                type: 'string'
            },
            {
                name: 'country',
                title: 'Country',
                type: 'string'
            },
            {
                name: 'cartItems',
                title: 'Cart Items',
                type: 'array',
                of: [{ type: 'reference', to: [{ type: 'product' }] }]
            },
            {
                name: 'total',
                title: 'Total',
                type: 'number'
            },
            {
                name: 'discount',
                title: 'Discount',
                type: 'number'
            },
            {
                name: 'orderDate',
                title: 'Order Date',
                type: 'datetime',
                options: {
                    dateFormat: 'YYYY-MM-DD',
                    timeFormat: 'HH:mm:ss',
                    calendarTodayLabel: 'Today'
                }
            },
            {
                name: 'paymentMethod',
                title: 'Payment Method',
                type: 'string',
            },
            {
                name: 'status',
                title: 'Order Status',
                type: 'string',
                options: {
                    list: [
                        { title: 'Pending', value: 'pending' },
                        { title: 'Shipped', value: 'shipped' },
                        { title: 'Delivered', value: 'delivered' }
                    ],
                    layout: 'radio'
                },
                initialValue: 'pending'
            }
        ]
    }
        export default order;