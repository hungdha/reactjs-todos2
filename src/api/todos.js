import axios from 'axios';
import {BASE_URL} from '../config';
const URL = BASE_URL + '/todos';
export default {
    fetchAll:(params) => {
        return axios.get(URL, {
            params : params 
        });
    },
    delete : (id) => {
        return axios.delete(URL + '/' + id)
    },
    update :( todo ) =>{
        return axios.put(URL + '/' + todo.id, {...todo})
    },
    create : (todo) => {
        return axios.post(URL, todo);
    }
}