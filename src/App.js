/**
* @LuisStarlino
* Created AT: 02/04/2023 | 19:53
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import React from "react";
import { Initial, Login, EditProfile, Reports, Appointments } from './pages/routes'
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "./components/routes";
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
                <Stack.Screen name="EditProfile" component={EditProfile}/>
                <Stack.Screen name="Reports" component={Reports}/>
                <Stack.Screen name="appointment" component={Appointments}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;