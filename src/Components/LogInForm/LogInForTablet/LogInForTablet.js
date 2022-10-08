import React from 'react';
import {Pressable, Text, TextInput, View} from "react-native";
import {styles} from "./LogInForTabletStyle";
import {useSelector} from "react-redux";
import {getIsError, getLoginInput, getPasswordInput} from "../../../Store/Selectors";

export const LogInForTablet = ({changeLoginInput, changePasswordInput, onSubmit}) => {

    const loginInput = useSelector(getLoginInput)
    const passwordInput = useSelector(getPasswordInput)
    const isError = useSelector(getIsError)

    return (
        <View style={styles.Body}>
            <Text style={styles.Title}>Authorization</Text>
            <View style={styles.InputBody}>
                <Text style={styles.TitleInput}>LogIn</Text>
                <TextInput style={styles.Input}
                           value={loginInput} onChangeText={changeLoginInput}
                />
            </View>
            <View style={styles.InputBody}>
                <Text style={styles.TitleInput}>Password</Text>
                <TextInput style={styles.Input}
                           value={passwordInput} onChangeText={changePasswordInput}
                           secureTextEntry={true}
                />
            </View>
            <Pressable style={styles.Button} onPress={onSubmit}>
                <Text style={styles.PressableText}>Submit</Text>
            </Pressable>
            {isError ? <Text style={styles.errorMessage}>Invalid username or password</Text> : null}

        </View>
    );
};

