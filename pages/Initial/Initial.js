/**
* @LuisStarlino
* Created AT: 09/04/2023 | 18:08
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import {
    View,
    Text,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { background, imageView, textsView, btnsView, versionTag } from './style';
import LinearGradient from 'react-native-linear-gradient';
import { useState, useEffect } from 'react';
import { COLORS, GENERAL_STYLE, IMAGES } from '../../utilities/route'
import DeviceInfo from 'react-native-device-info';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

//_______________MAIN_____________________________
const Initial = ({ navigation, route }) => {

    //------------------------------------------------
    // --- USE EFFECT'S
    //------------------------------------------------
    useEffect(() => {

        auth().onAuthStateChanged((_user) => {

            if (_user) {
                // --- Save in Async Storage | Secction
                AsyncStorage.setItem('@vetapp:loginON', _user.uid);
            } else {
                console.log("Não tem login")
            }
        })
    }, [])

    //------------------------------------------------
    // --- CONST'S
    //------------------------------------------------
    let currentVersion = DeviceInfo.getVersion();

    //------------------------------------------------
    // --- FUNCTION'S
    //------------------------------------------------
    function renderImage() {
        return (
            <View style={imageView.container}>
                <Image source={IMAGES.initial_bg}
                    style={imageView.img}
                />
            </View>
        )
    }

    function renderTxts() {
        return (
            <View style={textsView.container}>
                {/* MAIN */}
                <Text style={textsView.bigTitle}>{`Controle todas as \n suas atividades`}</Text>

                {/* SUBTITLE */}
                <Text style={textsView.subTitle}>Controle sua rotina veterinária em um só lugar: consultas, atividades, contatos e arquivos. Sua melhor ferramenta para uma prática profissional eficiente.</Text>
            </View>
        )
    }

    function renderBtns() {
        return (
            <View style={btnsView.container}>
                <TouchableOpacity style={btnsView.btnArea1}>
                    <Text style={[btnsView.txt, { color: COLORS.BLUE }]}>Registrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={btnsView.btnArea2}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={btnsView.txt}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderVersionTag() {
        return (
            <View style={versionTag.container}>
                <Text style={versionTag.text}>Versão {currentVersion}</Text>
            </View>
        )
    }


    return (
        <View style={GENERAL_STYLE.view}>
            <StatusBar hidden={true} />
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 2.5, y: 1.5 }}
                colors={[
                    COLORS.BG_TESTE,
                    COLORS.BLUE
                ]}
                //style={style.container.gradient}
                style={background.main}
            >
                {/* IMAGE */}
                {renderImage()}


                {/* TEXT AND SUBTEXT */}
                {renderTxts()}

                {/* BTNS */}
                {renderBtns()}

                {renderVersionTag()}

            </LinearGradient>
        </View>
    )
}

export default Initial;