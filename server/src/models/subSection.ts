import mongoose, { Document, Schema } from 'mongoose';

interface ISubSection extends Document {
    title?: string;
    timeDuration?: string;
    description?: string;
    videoUrl?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const subSectionSchema = new Schema<ISubSection>(
    {
        title: {
            type: String
        },
        timeDuration: {
            type: String
        },
        description: {
            type: String
        },
        videoUrl: {
            type: String
        }
    },
    { timestamps: true }
);

export default mongoose.model<ISubSection>('SubSection', subSectionSchema);
