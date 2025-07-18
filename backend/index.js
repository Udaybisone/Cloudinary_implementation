import express from 'express';
import cors from 'cors';
import "dotenv/config"
import connectCloudinary from './config/cloudinary.js';
import uploadRout from './routes/upload.route.js';

const app = express();
const port = process.env.PORT || 4000;
connectCloudinary();

app.use(express.json());
app.use(cors());

app.use('/api', uploadRout);

app.listen(port, () => console.log(`App running on port ${port}`));
