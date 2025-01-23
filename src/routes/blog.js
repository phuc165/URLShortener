import express from 'express';
import blogController from '../app/controllers/BlogController.js';
import route from './index.js';

const router = express.Router();

router.get('/:slug', blogController.show);
router.get('/', blogController.index);

export default router;
