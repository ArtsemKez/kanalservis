import {NavigationContainer} from "@react-navigation/native";
import {LogInScreen} from "./src/Screens/LogInScreen/LogInScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Provider, useSelector} from "react-redux";
import store from "./src/Store/Store";
import {getIsAuth} from "./src/Store/Selectors";
import {UsersScreen} from "./src/Screens/UsersScreen/UsersScreen";

export default function App() {
    return (
        <Provider store={store}>
            <MainPage/>
        </Provider>
    );
}

const MainPage = () => {

    const Stack = createNativeStackNavigator();
    const isAuth = useSelector(getIsAuth)
    console.log(isAuth)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isAuth ?
                    <Stack.Screen name="LogIn" component={UsersScreen} options={{headerShown: false}}/>
                    :
                    <Stack.Screen name="LogIn" component={LogInScreen} options={{headerShown: false}}/>
                }

            </Stack.Navigator>
        </NavigationContainer>
    )
}