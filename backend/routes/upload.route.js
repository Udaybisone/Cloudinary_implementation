import express from 'express'
import uploadfile from '../controller/fileuploadController.js'
import multer from 'multer'
const uploadRout = express.Router()

const storage = multer.diskStorage({});
const upload = multer({ storage });

uploadRout.post('/uploadfile',upload.single('image'),uploadfile)

export default uploadRout