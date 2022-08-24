import express, { Router } from 'express';
import validateResizeImagesQuery from '../../middlewares/resizeImages';
import getImageAfterResizing  from '../../controllers/resizeImages';

const resizeImages:Router = express.Router();

resizeImages.get('/', validateResizeImagesQuery,  getImageAfterResizing);

export default resizeImages;
