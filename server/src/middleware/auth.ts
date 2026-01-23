import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface DecodedToken {
    email: string;
    id: string;
    accountType: string;
    iat: number;
    exp: number;
}

declare global {
    namespace Express {
        interface Request {
            user?: DecodedToken;
        }
    }
}

// ================ AUTH ================
// user Authentication by checking token validating
export const auth = (req: Request, res: Response, next: NextFunction): void | Response => {
    try {
        // extract token by anyone from this 3 ways
        const token = req.body?.token || 
                     req.cookies?.token || 
                     req.header('Authorization')?.replace('Bearer ', '');

        // if token is missing
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token is Missing'
            });
        }

        // verify token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET || '') as DecodedToken;
            req.user = decode;
        } catch (error) {
            console.error('Error while decoding token:', error);
            return res.status(401).json({
                success: false,
                error: (error as Error).message,
                message: 'Error while decoding token'
            });
        }
        // go to next middleware
        next();
    } catch (error) {
        console.error('Error while token validating:', error);
        return res.status(500).json({
            success: false,
            message: 'Error while token validating'
        });
    }
};

// ================ IS STUDENT ================
export const isStudent = (req: Request, res: Response, next: NextFunction): void | Response => {
    try {
        if (req.user?.accountType !== 'Student') {
            return res.status(401).json({
                success: false,
                message: 'This Page is protected only for student'
            });
        }
        // go to next middleware
        next();
    } catch (error) {
        console.error('Error while checking user validity with student accountType:', error);
        return res.status(500).json({
            success: false,
            error: (error as Error).message,
            message: 'Error while checking user validity with student accountType'
        });
    }
};

// ================ IS INSTRUCTOR ================
export const isInstructor = (req: Request, res: Response, next: NextFunction): void | Response => {
    try {
        if (req.user?.accountType !== 'Instructor') {
            return res.status(401).json({
                success: false,
                message: 'This Page is protected only for Instructor'
            });
        }
        // go to next middleware
        next();
    } catch (error) {
        console.error('Error while checking user validity with Instructor accountType:', error);
        return res.status(500).json({
            success: false,
            error: (error as Error).message,
            message: 'Error while checking user validity with Instructor accountType'
        });
    }
};

// ================ IS ADMIN ================
export const isAdmin = (req: Request, res: Response, next: NextFunction): void | Response => {
    try {
        if (req.user?.accountType !== 'Admin') {
            return res.status(401).json({
                success: false,
                message: 'This Page is protected only for Admin'
            });
        }
        // go to next middleware
        next();
    } catch (error) {
        console.error('Error while checking user validity with Admin accountType:', error);
        return res.status(500).json({
            success: false,
            error: (error as Error).message,
            message: 'Error while checking user validity with Admin accountType'
        });
    }
};
