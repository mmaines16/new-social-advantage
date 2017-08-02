import Product from '../models/product';

export default function () {
  Product.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const product = new Product({ name: 'Demo Product 1', slug: 'demo-product-1', cuid: 'ckayfkv3q93us7833ualdn2uc', pages: [] });

    Product.create(product, (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
