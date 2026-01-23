import { v2 as cloudinary } from 'cloudinary';
import { UploadedFile } from 'express-fileupload';

interface UploadOptions {
    folder?: string;
    height?: number;
    quality?: string | number;
    resource_type?: string;
}

interface CloudinaryResponse {
    public_id?: string;
    url?: string;
    secure_url?: string;
    [key: string]: any;
}

export const uploadImageToCloudinary = async (
    file: UploadedFile,
    folder: string,
    height?: number,
    quality?: string | number
): Promise<CloudinaryResponse | undefined> => {
    try {
        const options: UploadOptions = { folder };
        if (height) options.height = height;
        if (quality) options.quality = quality;
        options.resource_type = 'auto';

        return await cloudinary.uploader.upload(file.tempFilePath, options as any);
    } catch (error) {
        console.error("Error while uploading image:", error);
        return undefined;
    }
};

// Function to delete a resource by public ID
export const deleteResourceFromCloudinary = async (url: string): Promise<any | undefined> => {
    if (!url) return;

    try {
        const result = await cloudinary.uploader.destroy(url);
        console.log(`Deleted resource with public ID: ${url}`);
        console.log('Delete Resource result = ', result);
        return result;
    } catch (error) {
        console.error(`Error deleting resource with public ID ${url}:`, error);
        throw error;
    }
};
