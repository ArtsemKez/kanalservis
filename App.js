import {NavigationContainer} from "@react-navigation/native";
import {LogInScreen} from "./src/Screens/LogInScreen/LogInScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogInScreen} options={{headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}