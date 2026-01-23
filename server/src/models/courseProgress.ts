import mongoose, { Document, Schema } from 'mongoose';

interface ICourseProgress extends Document {
    courseID?: mongoose.Types.ObjectId;
    userId?: mongoose.Types.ObjectId;
    completedVideos: mongoose.Types.ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
}

const courseProgressSchema = new Schema<ICourseProgress>(
    {
        courseID: {
            type: Schema.Types.ObjectId,
            ref: "Course",
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        completedVideos: [
            {
                type: Schema.Types.ObjectId,
                ref: "SubSection",
            },
        ],
    },
    { timestamps: true }
);

export default mongoose.model<ICourseProgress>("CourseProgress", courseProgressSchema);
