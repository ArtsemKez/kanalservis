let initialState = {
    isAuth: false,
}

const AuthReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'LOG_IN':
            return state

        default: return state
    }
}

export const actions = {
    logIn: (pass) => ({type: 'LOG_IN', pass})
}

export default AuthReducer