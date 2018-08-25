/**
 * Mocking client-server processing
 */
import _todos from './data.json';
import _users from './user.json';

const TIMEOUT = 100

export default {
    getTodos: (cb, timeout) => setTimeout(() => cb(_todos), timeout || TIMEOUT),
    getUsers: (cb, timeout) => setTimeout(() => cb(_users), timeout || TIMEOUT),
}



