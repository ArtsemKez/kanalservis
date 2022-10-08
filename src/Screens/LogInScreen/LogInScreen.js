import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {HeaderComponent} from "../../Components/Header/Header";
import {LogInForPhone} from "../../Components/LogInForm/LogInForPhone/LogInForPhone";
import {LogInForTablet} from "../../Components/LogInForm/LogInForTablet/LogInForTablet";
import {useDispatch} from "react-redux";
import {actions} from "../../Store/AuthReducer";

export const LogInScreen = () => {

    const screen = Dimensions.get("screen");
    const [isPhone, setIsPhone] = useState(false)

    const dispatch = useDispatch()

    const changeLoginInput = (value) => {
        dispatch(actions.changeLoginInput(value))
    }

    const changePasswordInput = (value) => {
        dispatch(actions.changePasswordInput(value))
    }

    const onSubmit = () => {
        dispatch(actions.onSubmitLoginForm())
    }

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
                <LogInForPhone changeLoginInput={changeLoginInput}
                               changePasswordInput={changePasswordInput}
                               onSubmit={onSubmit}/> :
                <LogInForTablet changeLoginInput={changeLoginInput}
                                changePasswordInput={changePasswordInput}
                                onSubmit={onSubmit}/>
            }
        </View>

    );
};

const styles = StyleSheet.create({
    logInScreen: {},

});