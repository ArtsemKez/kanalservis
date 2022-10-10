import React from 'react';
import {Text, View} from "react-native";
import {styles} from "./UserForPhoneStyle";

export const UserForPhone = ({user}) => {

    return (
        <View style={styles.Body}>
            <Text style={styles.Name}>Author: {user.name}</Text>
            <Text style={styles.Company}>Company: {user.company.name}</Text>
            <Text style={styles.Title}>Title: {user?.post?.title}</Text>
        </View>
    );
};

