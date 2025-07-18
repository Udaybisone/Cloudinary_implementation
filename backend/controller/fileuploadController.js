import { v2 as cloudinary } from 'cloudinary';



const uploadfile = async (req, res) => {
  try {
    const imageFile = req.file;

    if (!imageFile) {
      return res.status(400).json({ message: "No file chosen" });
    }

    const result = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });


    return res.status(200).json({
      message: "Upload successful",
      url: imageFile
    });

  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    return res.status(500).json({
      message: "Upload failed",
      error: error.message
    });
  }
};

export default uploadfile;
