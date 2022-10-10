import React from 'react';
import {Image, Text, View} from "react-native";
import {styles} from "./UserForTabletStyle";

export const UserForTablet = ({user}) => {

    return (
        <View style={styles.Body}>
            <Image style={styles.Photo} source={user.photo}/>
            <Text style={styles.Name}>Author: {user.name}</Text>
            <Text style={styles.Company}>Company: {user.company.name}</Text>
            <Text style={styles.Title}>Title: {user?.post?.title}</Text>
            <Text style={styles.Content}>Body: {user?.post?.body}</Text>
        </View>
    );
};
