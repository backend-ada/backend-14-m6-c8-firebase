import { Router } from 'express';
import ProductController from '../controllers/product';

const router = Router();

router.get('/products', ProductController.getAll);
router.post('/products', ProductController.createOne);

export default router;
