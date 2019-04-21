import axios from 'axios';
import {BASE_URL} from '../config';
const URL = BASE_URL + '/comments'; // comments/todo/1
export default {
    fetchAll:(params) => {
        return axios.get(URL, {
            params : params 
        });
    },
    delete : (id) => {
        return axios.delete(URL + '/' + id)
    },
    update :( data ) =>{
        return axios.put(URL + '/' + data.id, {...todo})
    },
    create : (data) => {
        return axios.post(URL, data);
    },

    fetchCommentsOfTodo : (todo) => {
        return axios.get(URL, {
            params : {todo_id : todo.id}
        });
    }
}