import axios from 'axios'

const KEY = 'AIzaSyDksWhJFF9XI1OWGZUYbRzY9aHgI_K1N54';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});