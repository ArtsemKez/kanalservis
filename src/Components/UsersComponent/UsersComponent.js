import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../Store/Selectors";
import {requestPhoto, requestTitle, requestUsers} from "../../Store/UsersReducer";
import {UserForPhone} from "./UserForPhone/UserForPhone";
import {UserForTablet} from "./UserForTablet/UserForTablet";
import {styles} from "./UsersComponentStyle";

const UsersComponent = () => {

    const users = useSelector(getUsers)
    const dispatch = useDispatch()

    const screen = Dimensions.get("screen");
    const [isPhone, setIsPhone] = useState(false)

    useEffect(() => {
        if (screen.width <= 375) {
            setIsPhone(true)
        }
    }, [])

    useEffect(() => {
        dispatch(requestUsers())
    }, [])

    useEffect(() => {
        users.map((user) => {
            dispatch(requestTitle(user.id))
            dispatch(requestPhoto(user.id))
        })
    }, [users])


    console.log(users)
    debugger

    return (
        <View>
            {isPhone ?
                <ScrollView>
                    {users.map((user) => <UserForPhone user={user} key={user.id}/>) }
                </ScrollView>
                :
                <ScrollView>
                    <View style={styles.UserForTablet}>
                        {users.map((user) => <UserForTablet user={user} key={user.id}/>) }
                    </View>
                </ScrollView>
            }
        </View>

    );
};

export default UsersComponent;
