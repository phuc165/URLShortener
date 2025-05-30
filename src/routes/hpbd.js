import express from 'express';
import HappyBirthDayController from '../app/controllers/HappyBirthDayController.js';
import route from './index.js';

const router = express.Router();

router.get('/', HappyBirthDayController.index);

export default router;
