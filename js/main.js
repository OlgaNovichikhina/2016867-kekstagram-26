import { drawThumbnails } from  './draw-thumbnails.js';
import { initUploadFormAction } from './upload-form.js';
import { getData } from './api.js';
import { errorMessage } from './popup.js';
import { drawFilteredPhotos } from './filter-photo.js';

initUploadFormAction();
getData((photos) => {
  drawThumbnails(photos);
  drawFilteredPhotos(photos);
}, errorMessage);
