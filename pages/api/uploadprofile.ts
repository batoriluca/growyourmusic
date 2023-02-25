// This file is for connect to DB 
import connectDB from "../../middleware/mongoose"
import formidable from "formidable";
import path from "path";

export const config = {
    api: {
        bodyParser: false,
    },
};

// This api will update the data in db 
const handler = async (req, res) => {
    if (req.method == "POST") {
        const options: formidable.Options = {};
        options.uploadDir = path.join(process.cwd(), "/public/artist_img");
        options.multiples = false;
        options.maxFileSize = 1024 * 1024;
        options.filename = (name, ext, path, form) => {
            return Date.now().toString() + "_" + path.originalFilename;
        };
        options.filter = function ({ name, originalFilename, mimetype }) {
            // keep only images
            if (mimetype && !mimetype.includes("image")) {
                return res.status(200).json({ success: false, msg: "Only jpeg, jpg and png images are allowed"})
            } else {
                return mimetype && mimetype.includes("image");
            }
        }
        const form = formidable(options);
        form.parse(req, (err, fields, files) => {
            res.status(200).json({ success: true, msg: "File Uploaded", filename: files.file.newFilename })
        });

    } else {
        res.status(400).json({ error: "This method is not post" })
    }
}

export default connectDB(handler);