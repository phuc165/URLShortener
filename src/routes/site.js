import express from 'express';
import siteController from '../app/controllers/SiteController.js';
import route from './index.js';

const router = express.Router();

router.get('/search', siteController.search);
router.use('/', siteController.index);

export default router;
