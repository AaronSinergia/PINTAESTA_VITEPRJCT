import './inputSearch.css';

const inputSearch = () => {
  const input = document.createElement('input');
  input.className = 'input';
  input.type = 'text';
  input.placeholder = 'Empieza a dejar volar tu imaginación...';

  function searchImage(ev) {
    console.log(ev.target.value);
  }

  input.addEventListener('input', searchImage);

  return input;
};

export default inputSearch;
