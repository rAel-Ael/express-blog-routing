import express from 'express';
import { index, show, create } from '../controllers/rotte';





const router = express.Router();
router.get('/', index);
router.get('/:id', show);
router.post('/', create);







export default router;