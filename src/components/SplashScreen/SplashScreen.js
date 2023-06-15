/**
* @LuisStarlino
* Created AT: 06/04/2023 | 07:30
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import {
    View,
    Image,
    TouchableOpacity,
    Text
} from "react-native";
import { SpashContainer } from "./style";
import LottieView from 'lottie-react-native';
import { COLORS } from '../../utilities/routes';
import { ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//_______________MAIN_____________________________
const SplashScreen = ({ item, onPress }) => {

    /**************************************************************************************
    // @LuisStarlino |  01/06/2023  07"22
    //  --- Criando uma splash screen fake
    /***************************************************************************************/
    function FAKE_SPASH() {
        return (
            <LottieView style={SpashContainer.frameDog}
                source={require('../../assets/json/splash-dog.json')} autoPlay loop
            />
        )
    }

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 2.5, y: 1.5 }}
            colors={[
                COLORS.BG_TESTE,
                COLORS.BLUE
            ]}
            style={SpashContainer.main}
        >

            {FAKE_SPASH()}

            <View style={SpashContainer.loadingContainer}>
                <ActivityIndicator size={100} color={COLORS.LIGHT_BLUE} />
            </View>
        </LinearGradient>
    )
}

export default SplashScreen;