'use strict';
import { refs } from './refs';
import { renderList } from '../js/renderImage';
import { showButton } from './components/showButton.js';
import { showMessage } from './errortoastr';

const apiKey = '14706813-7c058fab53d6fa7c4bf5f75a9';

let page = 1;
let value = '';

export const getFetch = async function() {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=${page}&per_page=12&key=${apiKey}`;
  const response = await fetch(url);
  const { hits } = await response.json();
  return hits;
};

export const handleSubmit = e => {
  e.preventDefault();
  page = 1;
  refs.gallery.innerHTML = '';
  value = e.target.query.value;
  if (!value) {
    return showMessage();
  }
  getFetch()
    .then(renderList)
    .then(showButton);
};

export const loadMoreImg = e => {
  e.preventDefault();
  page += 1;

  getFetch()
    .then(renderList)
    .then(() => {
      const position = refs.button.offsetTop;
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    });
};
