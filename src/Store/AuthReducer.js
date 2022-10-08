let initialState = {
    isAuth: false,
    loginInput: '',
    passwordInput: '',
    authorizationData: {
        login: '1',
        password: '1'
    },
    isError: false,
}

const AuthReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'CHANGE_LOGIN_INPUT':
            return {...state, loginInput: actions.loginInput}
        case 'CHANGE_PASSWORD_INPUT':
            return {...state, passwordInput: actions.passwordInput}
        case 'ON_SUBMIT_LOGIN_FORM':
            let isAuth = state.isAuth
            let isError = state.isError
            if (state.loginInput === state.authorizationData.login && state.passwordInput === state.authorizationData.password) {
                isAuth = true
                isError = false
            } else {
                isError = true
            }
            return {...state, isAuth: isAuth, loginInput: '', passwordInput: '', isError: isError}
        default:
            return state
    }
}

export const actions = {
    changeLoginInput: (loginInput) => ({type: 'CHANGE_LOGIN_INPUT', loginInput}),
    changePasswordInput: (passwordInput) => ({type: 'CHANGE_PASSWORD_INPUT', passwordInput}),
    onSubmitLoginForm: () => ({type: 'ON_SUBMIT_LOGIN_FORM'})
}

export default AuthReducer