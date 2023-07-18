/**
* @LuisStarlino
* Created AT: 02/04/2023 | 20:04
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import style from "./style";
import { Home, Profile, FormAppointment, AgendaScreen } from '../../pages/routes';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabIcon } from '../routes';

const Tab = createBottomTabNavigator();

//_______________MAIN_____________________________
const Tabs = ({navigation, route}) => {

    //const { userId } = route.params;

    return(
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel: false,
                tabBarStyle: style.container.main
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                //initialParams={{userId: userId ?? null}}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={ focused ? "home" : "home-outline"} />,
                }}
            />
            <Tab.Screen
                name="form-appointment"
                component={FormAppointment}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={ focused ? "ios-add-circle" : "ios-add-circle-outline"} />,
                }}
            />  
            <Tab.Screen
                name="Agenda"
                component={AgendaScreen}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={ focused ? "calendar" : "calendar-outline"} />,
                }}
            />  
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={ focused ? "person-circle-sharp" : "person-circle-outline"} />,
                }}
            />  
        </Tab.Navigator>
    )
}


export default Tabs;