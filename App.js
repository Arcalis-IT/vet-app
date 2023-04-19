/**
* @LuisStarlino
* Created AT: 02/04/2023 | 19:53
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import React from "react";
import { Initial, Login } from './pages/routes'
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "./components/route";
import 'react-native-gesture-handler';

//_______________MAIN_____________________________
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Init" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Init" component={Initial}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Tab" component={Tabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;