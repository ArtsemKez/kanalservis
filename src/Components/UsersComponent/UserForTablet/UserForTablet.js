import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from "react-native";
import {styles} from "./UserForTabletStyle";
import {requestPhoto} from "../../../Store/UsersReducer";
import {useDispatch} from "react-redux";

export const UserForTablet = ({user}) => {

    const [isLoader, setIsLoader] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestPhoto(user.id))
        debugger
    }, [])

    return (
        <View style={styles.Body}>
            <View style={styles.Photo}>
                {
                    !isLoader ? <Image source={{ uri: `${user.photo}`}}/>
                    :
                    <ActivityIndicator size="large" color="#0000ff"/>
                }
            </View>
            <Text style={styles.Name}>Author: {user.name}</Text>
            <Text style={styles.Company}>Company: {user.company.name}</Text>
            <Text style={styles.Title}>Title: {user?.post?.title}</Text>
            <Text style={styles.Content}>Body: {user?.post?.body}</Text>
        </View>
    );
};
