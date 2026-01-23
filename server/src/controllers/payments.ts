import { Request, Response } from 'express';

// Payments controller stubs
export const capturePayment = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ success: false, message: 'Not implemented' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error capturing payment' });
    }
};

export const verifyPayment = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ success: false, message: 'Not implemented' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error verifying payment' });
    }
};
