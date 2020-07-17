import './styles.css';
import { apiService } from './js/apiService';

const refs = {
  gallery: document.querySelector('.gallery'),
};
console.log(refs.gallery);

apiService();
