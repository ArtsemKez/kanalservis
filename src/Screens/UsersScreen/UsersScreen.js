import React from 'react';
import {StyleSheet, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {HeaderComponent} from "../../Components/Header/Header";
import UsersComponent from "../../Components/UsersComponent/UsersComponent";

export const UsersScreen = () => {
    return (
        <View style={styles.usersScreen}>
            <StatusBar style="auto"/>
            <HeaderComponent/>
            <UsersComponent/>
        </View>
    );
};

const styles = StyleSheet.create({
    usersScreen: {
        
    },
});
