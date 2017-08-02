import { Router } from 'express';
import * as ProductController from '../controllers/product.controller';
const router = new Router();

// Get all Posts
router.route('/products').get(ProductController.getProducts);

// Get one post by slug
router.route('/products/:slug').get(ProductController.getProduct);

// Add a new Post
router.route('/products').post(ProductController.addProduct);

// Delete a post by slug
router.route('/products/:slug').delete(ProductController.deleteProduct);

export default router;
