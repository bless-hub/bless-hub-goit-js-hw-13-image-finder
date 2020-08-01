'use strict';
import getCard from '../templates/Photocard.hbs';
import { refs } from '../js/refs';

export const renderList = elem => {
  refs.gallery.insertAdjacentHTML('beforeend', getCard(elem));
};
