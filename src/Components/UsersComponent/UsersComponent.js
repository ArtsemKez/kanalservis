import React, {useEffect} from 'react';
import {ScrollView} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../Store/Selectors";
import {requestTitle, requestUsers} from "../../Store/UsersReducer";
import {UserForPhone} from "./UserForPhone/UserForPhone";

const UsersComponent = () => {

    const users = useSelector(getUsers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers())
        // users.map((user) => {
        //     dispatch(requestTitle(user.id))
        // })
    }, [])

    useEffect(() => {
        users.map((user) => {
            dispatch(requestTitle(user.id))
        })
    }, [users])

    return (
        <ScrollView>
            {users.map((user) => <UserForPhone user={user} key={user.id}/>) }
        </ScrollView>
    );
};

export default UsersComponent;