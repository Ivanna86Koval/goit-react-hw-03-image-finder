import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const KEY = '38494803-b3b4c85f97fe971422a222a26';

export const fetchSearch = async (search, page, per_page) => {
  const response = await axios.get(
    `?key=${KEY}&q=${search}&page=${page}&image_type=photo&orientation=horizontal&per_page=${per_page}`
  );
  return response.data;
};
