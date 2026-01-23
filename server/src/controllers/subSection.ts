import { Request, Response } from 'express';

// SubSection controller stubs
export const createSubSection = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ success: false, message: 'Not implemented' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error creating subsection' });
    }
};
