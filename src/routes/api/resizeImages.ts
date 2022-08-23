import express, { Router } from 'express';
import validateResizeImagesQuery from '../../middlewares/resizeImages';
import processImageResizing from '../../utilities/resizeImages';
import getImageAfterResizing  from '../../controllers/resizeImages';

const resizeImages:Router = express.Router();

resizeImages.get('/', validateResizeImagesQuery, processImageResizing, getImageAfterResizing);

export default resizeImages;
