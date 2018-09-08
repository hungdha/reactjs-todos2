import axios from 'axios';
export default{
    fetchUsers:(params, callback) => {
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
    }
}