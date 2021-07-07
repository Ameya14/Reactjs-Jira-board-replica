import axios from 'axios';

const instance = axios.create({
    baseURL: "https://jiraboard-d2847-default-rtdb.firebaseio.com/"
})

export default instance;