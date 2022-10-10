import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Dimensions, SafeAreaView, ScrollView, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoader, getUsers} from "../../Store/Selectors";
import {requestTitle, requestUsers} from "../../Store/UsersReducer";
import {UserForPhone} from "./UserForPhone/UserForPhone";
import {UserForTablet} from "./UserForTablet/UserForTablet";
import {styles} from "./UsersComponentStyle";

const UsersComponent = () => {

    const users = useSelector(getUsers)
    const isLoader = useSelector(getIsLoader)

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
        })
    }, [users])



    return (
        <SafeAreaView style={{height: '89%'}}>
            {isLoader ? <ActivityIndicator size="large" color="#0000ff" /> :
                <View>
                    {isPhone ?
                        <ScrollView style={{marginBottom: 10}}>
                            {users.map((user) => <UserForPhone user={user} key={user.id}/>)}
                        </ScrollView>
                        :
                        <ScrollView>
                            <View style={styles.UserForTablet}>
                                {users.map((user) => <UserForTablet user={user} key={user.id}/>) }
                            </View>
                        </ScrollView>
                    }
                </View>
            }
        </SafeAreaView>
    );
};

export default UsersComponent;
