import { v2 as cloudinary } from "cloudinary";

if (!process.env.CLOUDINARY_CLOUD_NAME) {
  throw new Error("CLOUDINARY_CLOUD_NAME is not set");
}

if (!process.env.CLOUDINARY_API_KEY) {
  throw new Error("CLOUDINARY_API_KEY is not set");
}

if (!process.env.CLOUDINARY_API_SECRET) {
  throw new Error("CLOUDINARY_API_SECRET is not set");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(image: File) {
  const imageData = await image.arrayBuffer();
  const mime = image.type;
  const encoding = "base64";
  const base64Image = Buffer.from(imageData).toString(encoding);
  const fileUri = `data:${mime};${encoding},${base64Image}`;
  const result = await cloudinary.uploader.upload(fileUri, {
    folder: "car_images",
    use_filename: true,
    invalidate: true,
    resource_type: "image",
    filename_override: image.name,
  });

  return result.public_id;
}

export async function deleteImage(publicId: string) {
  await cloudinary.uploader.destroy(publicId);
}
