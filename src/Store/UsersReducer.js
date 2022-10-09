import {usersAPI} from "../API/API";

let initialState = {
    users: [],
}

const UsersReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'GET_USERS':
            return {...state, users: actions.users}

        default:
            return state
    }
}

export const actions = {
    getUsers: (users) => ({type: 'GET_USERS', users}),
}

export const requestUsers = () => {
    return async (dispatch) => {
        let Response = await usersAPI.getUsers()
        dispatch(actions.getUsers(Response))
    }
}


export default UsersReducer