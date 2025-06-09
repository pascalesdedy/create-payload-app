'use server'

import * as cloudinary from 'cloudinary'

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
})

export const uploadFile = async (file: Buffer, options: { filename: string }) => {
  try {
    const result = await cloudinary.v2.uploader.upload(
      file.toString('base64'),
      {
        resource_type: 'auto',
        folder: 'media',
        public_id: options.filename,
        overwrite: true,
      },
    )

    return {
      url: result.secure_url,
      filename: result.public_id,
      mimeType: result.format,
      size: result.bytes,
      width: result.width,
      height: result.height,
    }
  } catch (error) {
    console.error('Cloudinary upload error:', error)
    throw error
  }
}

export const deleteFile = async (filename: string) => {
  try {
    await cloudinary.v2.uploader.destroy(filename)
  } catch (error) {
    console.error('Cloudinary delete error:', error)
    throw error
  }
}