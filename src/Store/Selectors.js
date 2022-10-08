import {createSelector} from "reselect";

const getIsAuthSelector = (state) => {
    return state.AuthPage.isAuth
}

export const getIsAuth = createSelector(getIsAuthSelector, (isAuth) => {
    return isAuth
})