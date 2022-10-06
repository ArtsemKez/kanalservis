import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export const UsersScreen = () => {
    return (
        <View style={styles.usersScreen}>
            <Text>Users</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    usersScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
