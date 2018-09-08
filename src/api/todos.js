import axios from 'axios';
import {BASE_URL} from '../config';
const URL = BASE_URL + '/todos';
export default {
    fetchTodos:(params, callback ) => {
        axios.get(URL,{
            params
        }).then(
            function(res){
                callback(res.data, res.headers['x-total-count']);
            }
        ).catch(
            function(err){
                throw err;
            }
        )
        
    },
    deleteTodo : (id, callback) => {
        axios.delete(URL + '/' + id).then(
            function(res){
                callback(res.data)
            }
        ).catch(
            function(err){
                throw err;
            }
        )
    },
    updateTodo :( todo, callback) =>{
        axios.put(URL + '/' + todo.id, {...todo}).then(function(res){
            callback(res.data);
        }).catch(function(err){
            throw err;
        })
    },
    insertTodo : (todo, callback) => {
        // console.log(todo);
        axios.post(URL, todo).then(function(res){
            callback(res.data)
        }).catch(function(err){
            throw err;
        })
    }
}