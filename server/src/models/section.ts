import mongoose, { Document, Schema } from 'mongoose';

interface ISection extends Document {
    sectionName?: string;
    subSection: mongoose.Types.ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
}

const sectionSchema = new Schema<ISection>(
    {
        sectionName: {
            type: String,
        },
        subSection: [
            {
                type: Schema.Types.ObjectId,
                ref: 'SubSection',
                required: true
            }
        ]
    },
    { timestamps: true }
);

export default mongoose.model<ISection>('Section', sectionSchema);
