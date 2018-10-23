import axios from 'axios';

// import services from '../api'
// import _todos from '../api/services.json'
// import { PER_PAGE } from '../constants'
// let nextTodoId = _todos.length + 1
const ROOT_URL = 'http://localhost:3000';

export default{
    fetchUsers:(params) => {
        return axios.get('http://localhost:3000/users');
    },
    insert : (params) => {
        return axios({
            method: 'post',
            data: {...params},
            url: `${ROOT_URL}/users`
        });
    },
    delete: (id) =>{
        return axios.delete('http://localhost:3000/users/' + id, );
    },
    update : ( obj, callback )=> {

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
    }
}