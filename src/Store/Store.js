import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import AuthReducer from "./AuthReducer";
import UsersReducer from "./UsersReducer";


let rootReducer = combineReducers({
    AuthPage: AuthReducer,
    UsersPage: UsersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store