const categories = [  
    {
        title: 'drinks',
        id: 1,
        items: [
            {
                id: 1,
                imagePath: 'https://images.unsplash.com/photo-1610094338066-f1bf3f45dbf7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                title: 'Cold Brew',
                price:2.25,
            },
            {
                id: 2,
                imagePath: 'https://images.unsplash.com/photo-1468418143278-41595b1a4c89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
                title: 'Cappuccino',
                price:2.70,
            },
            {
                id: 3,
                imagePath: 'https://images.unsplash.com/photo-1450024529642-858b23834369?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=863&q=80',
                title: 'Simple Hot Coffee',
                price:2.75,
            },
            {
                id: 4,
                imagePath: 'https://images.unsplash.com/photo-1547149617-609fafa00a6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                title: 'Matcha Tea',
                price:3.70,
            },
            {
                id: 5,
                imagePath: 'https://images.unsplash.com/photo-1522520605515-22f0c506c369?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                title: 'Earl Grey Tea',
                price: 3.15,
            },
            {
                id: 6,
                imagePath: 'https://images.unsplash.com/photo-1576169884631-382813d0090e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
                title: 'Oat Milk Coffee',
                price: 4.5
            },
            {
                id: 7,
                imagePath: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
                title: 'Iced Lime Tea',
                price: 4.99,
            },
        ]
        
    },
    {
        title: 'lunch',
        id: 2,
        items: [
            {
                id: 1,
                imagePath: 'https://images.unsplash.com/photo-1590835856923-cf452a6d8da7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                title: 'Egg Salad Sandwich',
                price: 3.99,
            },
            {
                id: 2,
                imagePath: 'https://images.unsplash.com/photo-1585841393012-e4ded4a6e2d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                title: 'Cream Cheese Bagel',
                price: 8.99,
            },
            {
                id: 3,
                imagePath: 'https://images.unsplash.com/photo-1547496502-affa22d38842?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1168&q=80',
                title: 'Salad',
                price: 7.99,
            },
            {
                id: 4,
                imagePath: 'https://images.unsplash.com/photo-1588137378625-ba3a4169bf5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                title: 'Avocado Toast',
                price: 9.99,
            },
            {
                id: 5,
                imagePath: 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80',
                title: 'Grilled Cheese Sandwich',
                price: 7.99,
            },

        ]
    },
    {
        title: 'dessert',
        id: 3,
        items: [
            {
                id: 1,
                imagePath: 'https://images.unsplash.com/photo-1564633193351-8bdd3a70bcf6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                title: 'Ice Cream with a Shot',
                price: 4.99,
            },
            {
                id: 2,
                imagePath: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
                title: 'Chocolate Donut',
                price: 7.99,
            },
            {
                id: 3,
                imagePath: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                title: 'Mint Chip Cupcake',
                price: 4.59,
            },
            {
                id: 4,
                imagePath: 'https://images.unsplash.com/photo-1611464047877-5af5143e3f68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                title: 'Oreo Cupcake',
                price: 3.59,
            },
            {
                id: 5,
                imagePath: 'https://images.unsplash.com/photo-1587339144258-c2a54007d2a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                title: 'Chocolate Brownies',
                price: 8.59,
            },
            
        ]
    },
    {
        title: 'merchandise',
        id: 4,
        items: [
            {
                id: 1,
                imagePath: 'https://images.unsplash.com/photo-1610223516037-98a56e639456?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                title: 'Gold Plated Bracelet',
                price: 9.59,
            },
            {
                id: 2,
                imagePath: 'https://images.unsplash.com/photo-1565206077212-4eb48d41f54b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                title: 'Simple Ring',
                price: 9.40,
            },
            {
                id: 3,
                imagePath: 'https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                title: 'The Bag',
                price: 9.20,
            },
            {
                id: 4,
                imagePath: 'https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                title: 'Gift Box',
                price: 6.20,
            },
            {
                id: 5,
                imagePath: 'https://images.unsplash.com/photo-1554894872-4e447dadac68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                title: 'Pink Envelope',
                price: 2.00,
            },
            
        ]
    },
    {
        title: 'take home',
        id: 5,
        items: [
            {
                id: 1,
                imagePath: 'https://images.unsplash.com/photo-1587049016823-69ef9d68bd44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                title: 'One Pound Beans',
                price: 9.75,
            },
            {
                id: 2,
                imagePath: 'https://images.unsplash.com/photo-1546379753-abb7fd8cfb93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
                title: 'Coffee Mug',
                price: 9.10,
            },
            {
                id: 3,
                imagePath: 'https://images.unsplash.com/photo-1606937898591-f862035e45f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                title: 'Special Matcha Powder',
                price: 9.90,
            },
            {
                id: 4,
                imagePath: 'https://images.unsplash.com/33/IR8nDBZETv6aM6HdJ7RD_IMG_5784.jpg?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
                title: 'Our Organic Honey',
                price: 9.50,
            },
            {
                id: 5,
                imagePath: 'https://images.unsplash.com/photo-1600223933926-70910c9229e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=460&q=80',
                title: 'Fresh Mint Leaves',
                price: 2.00,
            },
            
        ]
    },
]

export default categories;
