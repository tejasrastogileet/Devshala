import { Router } from 'express';
import { auth, isStudent, isInstructor } from '../middleware/auth';

const router = Router();

// Controllers - Import these as you convert them
// import { updateProfile, deleteAccount, getAllUserDetails } from '../controllers/profile';

// Routes for Profile
// router.delete('/deleteAccount', auth, deleteAccount);
// router.get('/getAllUserDetails', auth, getAllUserDetails);
// router.put('/updateProfile', auth, updateProfile);
// router.get('/instructorDashboard', auth, isInstructor, instructorDashboard);

export default router;
