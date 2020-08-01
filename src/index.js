import './styles.scss';
import { loadMoreImg, handleSubmit } from './js/apiService.js';
import { refs } from './js/refs';
import { openModal } from './js/components/modal';

refs.input.addEventListener('submit', handleSubmit);
refs.button.addEventListener('click', loadMoreImg);
refs.gallery.addEventListener('click', openModal);

//===========================================================================================

//=============================================================================================
