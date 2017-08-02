import { Router } from 'express';
import * as PageController from '../controllers/page.controller';
const router = new Router();

// Get all Pages
router.route('/pages').get(PageController.getPages);

// Get one Page by slug
router.route('/pages/:slug').get(PageController.getPage);

// Add a new Page
router.route('/pages').post(PageController.addPage);

// Delete a Page by slug
router.route('/pages/:slug').delete(PageController.deletePage);

export default router;
