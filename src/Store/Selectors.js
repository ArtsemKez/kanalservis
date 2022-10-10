import {createSelector} from "reselect";

const getIsAuthSelector = (state) => {return state.AuthPage.isAuth}
export const getIsAuth = createSelector(getIsAuthSelector, (isAuth) => {return isAuth})

const getLoginInputSelector = (state) => {return state.AuthPage.loginInput}
export const getLoginInput = createSelector(getLoginInputSelector, (loginInput) => {return loginInput})

const getPasswordInputSelector = (state) => {return state.AuthPage.passwordInput}
export const getPasswordInput = createSelector(getPasswordInputSelector, (passwordInput) => {return passwordInput})

const getIsErrorSelector = (state) => {return state.AuthPage.isError}
export const getIsError = createSelector(getIsErrorSelector, (isError) => {return isError})

const getUsersSelector = (state) => {return state.UsersPage.users}
export const getUsers = createSelector(getUsersSelector, (users) => {return users})

export const getIsLoader = (state) => {return state.UsersPage.isLoader}


