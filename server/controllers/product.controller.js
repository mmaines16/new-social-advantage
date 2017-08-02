import Product from '../models/product';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all products
 * @param req
 * @param res
 * @returns void
 */
export function getProducts(req, res) {
  Product.find().sort({ name: 1 }).exec((err, products) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ products });
  });
}

/**
 * Save a product
 * @param req
 * @param res
 * @returns void
 */
export function addProduct(req, res) {
  if (!req.body.product.name) {
    res.status(403).end();
  }

  const newProduct = new Product(req.body.product);

  // Let's sanitize inputs
  newProduct.name = sanitizeHtml(newProduct.name);

  newProduct.slug = slug(newProduct.name.toLowerCase(), { lowercase: true });
  newProduct.cuid = cuid();
  newProduct.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ product: saved });
  });
}

/**
 * Get a single product
 * @param req
 * @param res
 * @returns void
 */
export function getProduct(req, res) {
  Product.findOne({ slug: req.params.slug }).exec((err, product) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ product });
  });
}

/**
 * Delete a product
 * @param req
 * @param res
 * @returns void
 */
export function deleteProduct(req, res) {
  Product.findOne({ slug: req.params.slug }).exec((err, product) => {
    if (err) {
      res.status(500).send(err);
    }

    product.remove(() => {
      res.status(200).end();
    });
  });
}
