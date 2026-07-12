import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async (): Promise<void> => {
    try {
        const mongoUri = process.env.DATABASE_URL;
        
        if (!mongoUri) {
            throw new Error('DATABASE_URL environment variable is not defined');
        }

        // Log connection string with masked credentials
        console.log('[MongoDB] Connecting to:', mongoUri.replace(/\/\/[^:]*:[^@]*@/, '//***:***@'));
        
        await mongoose.connect(mongoUri);
        console.log('Database connected successfully');
    } catch (error) {
        console.error(`Error while connecting server with Database`);
        console.error(error);
        process.exit(1);
    }
};
