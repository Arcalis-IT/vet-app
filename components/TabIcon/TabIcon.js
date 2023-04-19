/**
* @LuisStarlino
* Created AT: 02/04/2023 | 20:28
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import {
    View,
    Image,
    Touchable,
    TouchableOpacity,
    Text
} from "react-native";
import style from "./style";
import { COLORS } from '../../utilities/route';
import Icon from 'react-native-vector-icons/Ionicons';



//_______________MAIN_____________________________
const TabIcon = ({ focused, icon }) => {
    return (
        <View style={style.container.main}>

            <Icon name={icon} size={30} color={focused ? COLORS.BLUE: COLORS.DARK_BLUE} />
            { focused && <View style={style.container.underNivel} /> }            
        </View>
    )
}

export default TabIcon;