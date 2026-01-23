import { Router } from 'express';
import { auth, isStudent } from '../middleware/auth';

const router = Router();

// Controllers - Import these as you convert them
// import { capturePayment, verifyPayment } from '../controllers/payments';

// Routes for Payments
// router.post('/capturePayment', auth, isStudent, capturePayment);
// router.post('/verifyPayment', auth, isStudent, verifyPayment);

export default router;
