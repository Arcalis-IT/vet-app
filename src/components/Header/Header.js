/**
* @LuisStarlino
* Created AT: 18/07/2023 | 20:07
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import style from "./style";
import {
    View,
    Text,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from "../../utilities/routes";
const Header = ({ goBackFunc, openMenu }) => {
    return (
        <View style={style.mainStyle.containerHeader}>

            {/* GO BACK */}
            <TouchableOpacity style={style.mainStyle.btnBack} onPress={() => { goBackFunc() }}>
                <Icon name={"arrow-left"} color={COLORS.BLUE} size={30} />
            </TouchableOpacity>

            {/* MENU */}
            <TouchableOpacity style={style.mainStyle.btnBack} onPress={() => { openMenu() }}>
                <Icon name={"menu"} color={COLORS.BLUE} size={30} />
            </TouchableOpacity>
        </View>
    )
}

export default Header;