'use strict';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export const openModal = e => {
  const instance = basicLightbox.create(`<img src="${e.target.dataset.src}">`);
  instance.show();
};
