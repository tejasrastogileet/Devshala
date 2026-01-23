import mongoose, { Document, Schema } from 'mongoose';

interface ICategory extends Document {
    name: string;
    description?: string;
    courses: mongoose.Types.ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
}

const categorySchema = new Schema<ICategory>(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        courses: [
            {
                type: Schema.Types.ObjectId,
                ref: "Course",
            },
        ],
    },
    { timestamps: true }
);

export default mongoose.model<ICategory>('Category', categorySchema);
