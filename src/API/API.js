import Axios from "axios";

export const instance = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const usersAPI = {
    getUsers() {return instance.get('users')}
}