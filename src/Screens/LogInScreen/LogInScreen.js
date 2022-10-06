import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {HeaderComponent} from "../../Components/Header/Header";
import {LogInForPhone} from "../../Components/LogInForm/LogInForPhone/LogInForPhone";
import {LogInForTablet} from "../../Components/LogInForm/LogInForTablet/LogInForTablet";

export const LogInScreen = () => {

    const screen = Dimensions.get("screen");
    const [isPhone, setIsPhone] = useState(false)

    useEffect(() => {
        if (screen.width <= 375) {
            setIsPhone(true)
        }
    }, [])


    return (
                <View style={styles.logInScreen}>
                    <StatusBar style="auto"/>
                    <HeaderComponent/>
                    {isPhone ?
                        <LogInForPhone/> :
                        <LogInForTablet/>
                    }
                </View>

    );
};

const styles = StyleSheet.create({
    logInScreen: {

    },

});