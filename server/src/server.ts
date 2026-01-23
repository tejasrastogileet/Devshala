import express, { Express, Request, Response } from 'express';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// connection to DB and cloudinary
import { connectDB } from './config/database';
import { cloudinaryConnect } from './config/cloudinary';

// routes - using JavaScript versions until TypeScript migration is complete
const userRoutes = require('../routes/user');
const profileRoutes = require('../routes/profile');
const paymentRoutes = require('../routes/payments');
const courseRoutes = require('../routes/course');

dotenv.config();

const app: Express = express();

// middleware 
app.use(express.json()); // to parse json body
app.use(cookieParser());
app.use(
    cors({
        origin: "*",
        credentials: true
    })
);
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp'
    })
);

const PORT: string | number = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`);
});

// connections
connectDB();
cloudinaryConnect();

// mount route
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/profile', profileRoutes);
app.use('/api/v1/payment', paymentRoutes);
app.use('/api/v1/course', courseRoutes);

// Default Route
app.get('/', (req: Request, res: Response) => {
    res.send(`<div>
    This is Default Route  
    <p>Everything is OK</p>
    </div>`);
});
