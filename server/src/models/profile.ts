import mongoose, { Document, Schema } from 'mongoose';

interface IProfile extends Document {
    gender?: string;
    dateOfBirth?: string;
    about?: string;
    contactNumber?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

const profileSchema = new Schema<IProfile>(
    {
        gender: {
            type: String
        },
        dateOfBirth: {
            type: String
        },
        about: {
            type: String,
            trim: true
        },
        contactNumber: {
            type: Number,
            trim: true
        }
    },
    { timestamps: true }
);

export default mongoose.model<IProfile>('Profile', profileSchema);
