import { Router, Request, Response } from 'express';
import { auth } from '../middleware/auth';

const router = Router();

// Controllers - Import these as you convert them
// import { signup, login, sendOTP, changePassword } from '../controllers/auth';
// import { resetPasswordToken, resetPassword } from '../controllers/resetPassword';

// Routes for Login, Signup, and Authentication
// router.post('/signup', signup);
// router.post('/login', login);
// router.post('/sendotp', sendOTP);
// router.post('/changepassword', auth, changePassword);
// router.post('/reset-password-token', resetPasswordToken);
// router.post('/reset-password', resetPassword);

export default router;
