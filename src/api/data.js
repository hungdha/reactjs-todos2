/**
 * Mocking client-server processing
 */
import _todos from './data.json';
import _users from './user.json';
import axios from 'axios';

const TIMEOUT = 100

export default {
    // getTodos: (cb, timeout) => setTimeout(() => cb(_todos), timeout || TIMEOUT),
    getTodos:(params, callback ) => {
        /* let query = ''
        if(params){
            // const { completed, _start, _limit } = params;
            let slash = '?';
            if(_start != null && _limit != null){
                query += '&_start=0&_limit=10'
            }
            if(completed != null && completed != 'all' ){
                let bool = completed == 'active' ? false : true
                query = '&completed=' +bool;
            }
            query = query.indexOf('&') == 0 ? query.substring(1) : query;
        }
 */
        const url = 'http://localhost:3000/todos'; 
        axios.get(url,{
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
        axios.delete('http://localhost:3000/todos/' + id).then(
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
        axios.put('http://localhost:3000/todos/' + todo.id, {...todo}).then(function(res){
            callback(res);
        }).catch(function(err){
            throw err;
        })
    },
    // getUsers: (cb, timeout) => setTimeout(() => cb(_users), timeout || TIMEOUT),
    getUsers:(params, callback) => {
        let query = '';
    
        axios.get('http://localhost:3000/users' + query).then(
            function(res){
                callback(res.data)
            }
        ).catch(
            function(err){
                throw err;
            }
        )
    },
    insertUser : (text, callback) => {
        axios.post('http://localhost:3000/users', {text}).then(function(res){
            callback(res.data);
            /*
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
            */
        }).catch(function(err){
            throw err;
        })
    },
    assignUsers : (params, callback) => {
        const { users, todoId } = params;
        users.map( (userId, index )=>{
            axios.post('http://localhost:3000/assigns', { 
                userId : userId,
                todoId : todoId
            }).then(function(res){
                // callback(res.data)
                if(index == users.length - 1 ){
                    callback(res.data);
                }
            }).catch(function(err){
                throw err;
            })
        })
    },
    getUsersAssigned : (userId, callback) => {
        axios.get('http://localhost:3000/assigns', {
            userId : userId
        }).then(
            (res) => {
                callback(res.data)
            }
        ).catch(
            () => {

            }
        )
    }
    
}



