exports.Query = {
  hello: () => {
    return "World!";
  },
  products: (parent, { filter }, { products }) => {
    let filterProducts = products;
    if (filter) {
      if (filter.onSale === true) {
        filterProducts = filterProducts.filter((product) => {
          return product.onSale;
        });
      }
    }
    return filterProducts;
  },

  product: (parent, { id }, { products }) => {
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, { categories }) => categories,

  category: (parent, { id }, { categories }) => {
    return categories.find((category) => category.id === id);
  },
  reviews: (parent, args, { reviews }) => reviews,

  review: (parent, { id }, { reviews }) => {
    return reviews.find((review) => review.id === id);
  },
};
