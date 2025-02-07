import express from 'express';
import valentineController from '../app/controllers/ValentineController.js';
import route from './index.js';

const router = express.Router();

router.get('/', valentineController.index);

export default router;
