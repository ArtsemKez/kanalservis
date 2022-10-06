import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from "react-native";
import {styles} from "./LogInForPhoneStyle";

export const LogInForPhone = () => {

    const [logIn, setLogIn] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.Body}>
            <Text style={styles.Title}>Authorization</Text>
            <View>
                <Text style={styles.TitleInput}>LogIn</Text>
                <TextInput style={styles.Input}
                           value={logIn} onChangeText={setLogIn}
                />
            </View>
            <View>
                <Text style={styles.TitleInput}>Password</Text>
                <TextInput style={styles.Input}
                           value={password} onChangeText={setPassword}
                           secureTextEntry={true}
                />
            </View>
            <Pressable style={styles.Button}>
                <Text style={styles.PressableText}>Submit</Text>
            </Pressable>
        </View>
    );
};

