import './inputSearch.css';
import { apiCall } from '../../../../functions/apiCall';

const inputSearch = () => {
  const input = document.createElement('input');
  input.className = 'input';
  input.type = 'text';
  input.placeholder = 'Empieza a dejar volar tu imaginación...';

  function searchImage(ev) {
    const words = ev.target.value;
    apiCall(words);
  }

  input.addEventListener('input', searchImage);

  return input;
};

export default inputSearch;
