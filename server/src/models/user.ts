import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    accountType: 'Admin' | 'Instructor' | 'Student';
    active: boolean;
    approved: boolean;
    additionalDetails: mongoose.Types.ObjectId;
    courses: mongoose.Types.ObjectId[];
    image: string;
    token?: string;
    resetPasswordTokenExpires?: Date;
    courseProgress: mongoose.Types.ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new Schema<IUser>(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        accountType: {
            type: String,
            enum: ['Admin', 'Instructor', 'Student'],
            required: true
        },
        active: {
            type: Boolean,
            default: true,
        },
        approved: {
            type: Boolean,
            default: true,
        },
        additionalDetails: {
            type: Schema.Types.ObjectId,
            ref: 'Profile',
            required: true
        },
        courses: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Course'
            }
        ],
        image: {
            type: String,
            required: true
        },
        token: {
            type: String
        },
        resetPasswordTokenExpires: {
            type: Date
        },
        courseProgress: [
            {
                type: Schema.Types.ObjectId,
                ref: 'CourseProgress'
            }
        ]
    },
    { timestamps: true }
);

export default mongoose.model<IUser>('User', userSchema);
