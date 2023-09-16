import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api/";

const KEY = "39488057-992449a9912d55c687bf147f1";

export const fetchSearch = async (search, page, per_page) => {
    const response = await axios.get(`?key=${KEY}&q=${search}&page=${page}&image_type=photo&orientation=horizontal&per_page=${per_page}`)
    return response.data
}