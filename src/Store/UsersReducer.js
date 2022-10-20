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
            let usersForPosts = state.users
            let posts = actions.userPosts
            usersForPosts.map((user)=>{
                let userPost = posts.find(post => post.userId === user.id)
                user.post = userPost
            })
            return {...state, users: usersForPosts}

        case 'GET_USER_PHOTO':
            let usersForPhotos = state.users
            let photos = actions.userPhotos
            usersForPhotos.map((user) => {
                let userPhoto = photos.find(photo => photo.albumId === user.id)
                user.photo = userPhoto.thumbnailUrl
            })
            return {...state, users: usersForPhotos}

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
    getUserPhoto: (userPhotos) => ({type: 'GET_USER_PHOTO', userPhotos}),
    toggleIsLoader: (isLoader) => ({type: 'TOGGLE_IS_LOADER', isLoader})
}

export const requestUsers = () => {
    return async (dispatch) => {
        dispatch(actions.toggleIsLoader(true))
        let Response = await usersAPI.getUsers()
        dispatch(actions.getUsers(Response))
    }
}

export const requestPosts = () => {
    return async (dispatch) => {
        let Response = await usersAPI.getPost()
        dispatch(actions.getUserPosts(Response.data))
    }
}

export const requestPhoto = () => {
    return async (dispatch) => {
        let userPhoto = await usersAPI.getPhoto()
        dispatch(actions.getUserPhoto(userPhoto.data))
        dispatch(actions.toggleIsLoader(false))
    }
}

export default UsersReducer