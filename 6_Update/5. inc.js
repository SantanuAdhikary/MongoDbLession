db.products.insertOne(
    {
      _id: 1,
      sku: "abc123",
      quantity: 10,
      metrics: { orders: 2, ratings: 3.5 }
    }
 )