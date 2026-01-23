import { Request, Response } from 'express';

// ================ RESET PASSWORD TOKEN ================
export const resetPasswordToken = async (req: Request, res: Response): Promise<void> => {
    try {
        // TODO: Implement reset password token logic
        res.status(200).json({
            success: false,
            message: 'Not implemented'
        });
    } catch (error) {
        console.error('Error while resetting password token:', error);
        res.status(500).json({
            success: false,
            message: 'Error while resetting password token'
        });
    }
};

// ================ RESET PASSWORD ================
export const resetPassword = async (req: Request, res: Response): Promise<void> => {
    try {
        // TODO: Implement reset password logic
        res.status(200).json({
            success: false,
            message: 'Not implemented'
        });
    } catch (error) {
        console.error('Error while resetting password:', error);
        res.status(500).json({
            success: false,
            message: 'Error while resetting password'
        });
    }
};
