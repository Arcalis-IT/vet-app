/**
* @LuisStarlino
* Created AT: 06/04/2023 | 07:30
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import {
    View
} from "react-native";
import { SpashContainer } from "./style";
import LottieView from 'lottie-react-native';
import { COLORS, LOTTIES } from '../../utilities/routes';
import { ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useEffect, useState } from "react";

//_______________MAIN_____________________________
const SplashScreen = ({ item, onPress }) => {

    //------------------------------------------------
    // USE EFFECT'S
    //------------------------------------------------
    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        setSelectedSplash(randomNumber)
    }, [])

    //------------------------------------------------
    // CONST'S
    //------------------------------------------------
    const [selectedSplash, setSelectedSplash] = useState(null)

    /**************************************************************************************
    // @LuisStarlino |  01/06/2023  07"22
    //  --- Criando uma splash screen fake
    /***************************************************************************************/
    function FAKE_SPASH_1() {
        return (
            <LottieView style={SpashContainer.frameDog1}
                source={(LOTTIES.dogSplash1)} autoPlay loop
            />
        )
    }

    function FAKE_SPASH_2() {
        return (
            <LottieView source={(LOTTIES.dogSplash2)} autoPlay loop
            />
        )
    }

    function FAKE_SPASH_3() {
        return (
            <LottieView style={SpashContainer.frameDog3}
                source={(LOTTIES.catSplash1)} autoPlay loop
            />
        )
    }

    function FAKE_SPASH_4() {
        return (
            <LottieView style={SpashContainer.frameDog3}
                source={(LOTTIES.catSplash2)} autoPlay loop
            />
        )
    }

    switch (selectedSplash) {
        case 1:
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

                    {FAKE_SPASH_1()}

                    <View style={SpashContainer.loadingContainer1}>
                        <ActivityIndicator size={100} color={COLORS.LIGHT_BLUE} />
                    </View>
                </LinearGradient>
            )
        case 2:
            return (
                <LinearGradient
                    start={{ x: -1, y: 0 }}
                    end={{ x: 0.5, y: 1.0 }}
                    colors={[
                        COLORS.LIGHT_BLUE,
                        COLORS.BLUE
                    ]}
                    style={SpashContainer.main}
                >

                    {FAKE_SPASH_2()}

                    <View style={SpashContainer.loadingContainer2}>
                        <ActivityIndicator size={130} color={COLORS.WHITE} />
                    </View>
                </LinearGradient>
            )
        case 3:
            return (
                <LinearGradient
                    start={{ x: -1, y: 0 }}
                    end={{ x: 0.5, y: 1.0 }}
                    colors={[
                        COLORS.WHITE,
                        COLORS.WHITE
                    ]}
                    style={SpashContainer.main}
                >

                    {FAKE_SPASH_3()}

                    <View style={SpashContainer.loadingContainer2}>
                        <ActivityIndicator size={150} color={COLORS.DARK_BLUE} />
                    </View>
                </LinearGradient>
            )
        case 4:
            return (
                <LinearGradient
                    start={{ x: -1, y: 0 }}
                    end={{ x: 0.5, y: 0.9 }}
                    colors={[
                        COLORS.WHITE,
                        COLORS.WHITE
                    ]}
                    style={SpashContainer.main}
                >

                    {FAKE_SPASH_4()}

                    <View style={SpashContainer.loadingContainer2}>
                        <ActivityIndicator size={150} color={COLORS.DARK_BLUE} />
                    </View>
                </LinearGradient>
            )
        default:
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

                    {FAKE_SPASH_1()}

                    <View style={SpashContainer.loadingContainer}>
                        <ActivityIndicator size={100} color={COLORS.LIGHT_BLUE} />
                    </View>
                </LinearGradient>
            )

    }

}

export default SplashScreen;