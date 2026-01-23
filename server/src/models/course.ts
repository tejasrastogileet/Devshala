import mongoose, { Document, Schema } from 'mongoose';

interface ICourse extends Document {
    courseName?: string;
    courseDescription?: string;
    instructor: mongoose.Types.ObjectId;
    whatYouWillLearn?: string;
    courseContent: mongoose.Types.ObjectId[];
    ratingAndReviews: mongoose.Types.ObjectId[];
    price?: number;
    thumbnail?: string;
    category?: mongoose.Types.ObjectId;
    tag: string[];
    studentsEnrolled: mongoose.Types.ObjectId[];
    instructions?: string[];
    status?: 'Draft' | 'Published';
    createdAt?: Date;
    updatedAt?: Date;
}

const courseSchema = new Schema<ICourse>(
    {
        courseName: {
            type: String
        },
        courseDescription: {
            type: String
        },
        instructor: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        whatYouWillLearn: {
            type: String
        },
        courseContent: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Section'
            }
        ],
        ratingAndReviews: [
            {
                type: Schema.Types.ObjectId,
                ref: 'RatingAndReview'
            }
        ],
        price: {
            type: Number
        },
        thumbnail: {
            type: String
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        },
        tag: {
            type: [String],
            required: true
        },
        studentsEnrolled: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true
            }
        ],
        instructions: {
            type: [String]
        },
        status: {
            type: String,
            enum: ['Draft', 'Published']
        }
    },
    { timestamps: true }
);

export default mongoose.model<ICourse>('Course', courseSchema);
