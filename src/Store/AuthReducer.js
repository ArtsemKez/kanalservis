let initialState = {
    isAuth: false,
    loginInput: '',
    passwordInput: '',
    authorizationData: {
        login: 'user',
        password: 'password'
    },
    isError: false,
}

const AuthReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'CHANGE_LOGIN_INPUT':
            return {...state, loginInput: actions.loginInput, isError: false}
        case 'CHANGE_PASSWORD_INPUT':
            return {...state, passwordInput: actions.passwordInput, isError: false}
        case 'ON_SUBMIT_LOGIN_FORM':
            let isAuth = state.isAuth
            let isError = state.isError
            if (state.loginInput.toLowerCase() === state.authorizationData.login.toLowerCase() && state.passwordInput === state.authorizationData.password) {
                isAuth = true
                isError = false
            } else {
                isError = true
            }
            return {...state, isAuth: isAuth, loginInput: '', passwordInput: '', isError: isError}
        case 'LOG_OUT':
            return {...state, isAuth: false}
        default:
            return state
    }
}

export const actions = {
    changeLoginInput: (loginInput) => ({type: 'CHANGE_LOGIN_INPUT', loginInput}),
    changePasswordInput: (passwordInput) => ({type: 'CHANGE_PASSWORD_INPUT', passwordInput}),
    onSubmitLoginForm: () => ({type: 'ON_SUBMIT_LOGIN_FORM'}),
    logOut: () => ({type: 'LOG_OUT'})
}

export default AuthReducer