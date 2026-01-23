import { Router } from 'express';
import { auth, isStudent, isInstructor, isAdmin } from '../middleware/auth';

const router = Router();

// Controllers - Import these as you convert them
// import course controllers

// Routes for Courses
// Router for CRUD operations (accessible by admin only) for courses and subsections
// router.post('/createCourse', auth, isAdmin, createCourse);
// router.get('/getCourse', getCourse);
// router.post('/getFullCourseDetails', auth, getFullCourseDetails);
// etc...

export default router;
