import { apiCall } from '../../functions/apiCall';

const section = () => {
  const section = document.createElement('section');
  section.className = 'section';

  apiCall();

  return section;
};

export default section;
