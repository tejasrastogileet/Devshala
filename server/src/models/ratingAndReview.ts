import mongoose, { Document, Schema } from 'mongoose';

interface IRatingAndReview extends Document {
    user: mongoose.Types.ObjectId;
    rating: string;
    review: string;
    course: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

const ratingAndReviewSchema = new Schema<IRatingAndReview>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        rating: {
            type: String,
            required: true
        },
        review: {
            type: String,
            required: true
        },
        course: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Course",
            index: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model<IRatingAndReview>('RatingAndReview', ratingAndReviewSchema);
