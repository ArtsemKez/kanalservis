import React, {useEffect, useState} from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, View} from "react-native";
import logo from '../../Assets/Images/logo.png'
import logoMin from '../../Assets/Images/logoMin.png'
import logOut from '../../Assets/Images/logOut.png'

export const HeaderComponent = () => {

    const screen = Dimensions.get("screen");
    const [isPhone, setIsPhone] = useState(false)

    useEffect(() => {
        if (screen.width <= 375) {
            setIsPhone(true)
        }
    }, [])

    return (
        <SafeAreaView style={styles.Header}>
            {isPhone ?
                <View style={styles.BodyPhone}>
                    <Image source={logoMin}/>
                    <View>
                        <Image source={logOut}/>
                    </View>
                </View>
                :
                <View>
                    <View style={styles.BodyTablet}>
                        <Image source={logo}/>
                        <View>
                            <Image source={logOut}/>
                        </View>
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