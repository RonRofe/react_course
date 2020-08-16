import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-course-bc39b.firebaseio.com',
});

export default instance;