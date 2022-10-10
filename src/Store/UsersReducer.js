import {usersAPI} from "../API/API";

let initialState = {
    users: [],
    isLoader: false
}

const UsersReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case 'GET_USERS':
            let usersArray = actions.users.data
            return {...state, users: usersArray}

        case 'GET_USER_POSTS':
            let UserPost = actions.userPosts[0]
            let userKey = actions.userPosts[0].userId - 1
            let users = state.users
            users[userKey].post = UserPost
            return {...state, users}

        case 'GET_USER_PHOTO':
            let user = state.users
            user[actions.userId].photo = actions.userPhoto
            return {...state, users: user}

        case 'TOGGLE_IS_LOADER':
            let isLoader = actions.isLoader
            return {...state, isLoader: isLoader}

        default:
            return state
    }
}

export const actions = {
    getUsers: (users) => ({type: 'GET_USERS', users}),
    getUserPosts: (userPosts) => ({type: 'GET_USER_POSTS', userPosts}),
    getUserPhoto: (userId, userPhoto) => ({type: 'GET_USER_PHOTO', userId, userPhoto}),
    toggleIsLoader: (isLoader) => ({type: 'TOGGLE_IS_LOADER', isLoader})
}

export const requestUsers = () => {
    return async (dispatch) => {
        dispatch(actions.toggleIsLoader(true))
        let Response = await usersAPI.getUsers()
        dispatch(actions.getUsers(Response))
        dispatch(actions.toggleIsLoader(false))
    }
}

export const requestTitle = (userId) => {
    return async (dispatch) => {
        dispatch(actions.toggleIsLoader(true))
        let userPosts = await usersAPI.getPost(userId)
        dispatch(actions.getUserPosts(userPosts.data))
        if(userId === 10){
            dispatch(actions.toggleIsLoader(false))
        }
    }

}

export const requestPhoto = (userId) => {
    return async (dispatch) => {
        let userPhoto = await usersAPI.getPhoto(userId)
        dispatch(actions.getUserPhoto(userId - 1, userPhoto.data[0].thumbnailUrl))
    }
}



export default UsersReducer