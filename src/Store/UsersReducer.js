import {usersAPI} from "../API/API";

let initialState = {
    users: [],
}

const UsersReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case 'GET_USERS':
            let usersArray = actions.users.data
            console.log(usersArray)
            return {...state, users: usersArray}

        case 'GET_USER_POSTS':
            let UserPost = actions.userPosts[0]
            let userKey = actions.userPosts[0].userId - 1
            let users = state.users
            users[userKey].post = UserPost
            return {...state, users}

        default:
            return state
    }
}

export const actions = {
    getUsers: (users) => ({type: 'GET_USERS', users}),
    getUserPosts: (userPosts) => ({type: 'GET_USER_POSTS', userPosts}),
}

export const requestUsers = () => {
    return async (dispatch) => {
        let Response = await usersAPI.getUsers()
        dispatch(actions.getUsers(Response))
    }
}

export const requestTitle = (userId) => {
    return async (dispatch) => {
        let userPosts = await usersAPI.getPost(userId)
        dispatch(actions.getUserPosts(userPosts.data))
    }
}


export default UsersReducer