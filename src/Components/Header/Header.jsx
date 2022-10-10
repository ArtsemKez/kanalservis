import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Pressable, SafeAreaView, StyleSheet, View} from "react-native";
import logo from '../../Assets/Images/logo.png'
import logoMin from '../../Assets/Images/logoMin.png'
import logOut from '../../Assets/Images/logOut.png'
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth} from "../../Store/Selectors";
import {actions} from "../../Store/AuthReducer";

export const HeaderComponent = () => {

    const screen = Dimensions.get("screen");
    const [isPhone, setIsPhone] = useState(false)

    const dispatch = useDispatch()

    const isAuth = useSelector(getIsAuth)

    useEffect(() => {
        if (screen.width <= 375) {
            setIsPhone(true)
        }
    }, [])

    const AuthLogOut = () => {
        dispatch(actions.logOut())
    }

    return (
        <SafeAreaView style={styles.Header}>
            {isPhone ?
                <View style={styles.BodyPhone}>
                    <Image source={logoMin}/>
                    {isAuth ? <Pressable onPress={AuthLogOut}><Image source={logOut}/></Pressable> : null}
                </View>
                :
                <View>
                    <View style={styles.BodyTablet}>
                        <Image source={logo}/>
                        {isAuth ? <Pressable onPress={AuthLogOut}><Image source={logOut}/></Pressable> : null}
                    </View>
                </View>
            }
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    Header: {
        backgroundColor: '#dbaa61',
    },

    BodyTablet: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 118,
        marginHorizontal: 37,
    },

    BodyPhone: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 118,
        marginHorizontal: 15,
    },

});