import express from 'express';
import siteController from '../app/controllers/SiteController.js';
import route from './index.js';

const router = express.Router();

router.post('/result', siteController.result);
router.get('/:shortUrlId', siteController.redirect);
router.get('/', siteController.create);

export default router;
