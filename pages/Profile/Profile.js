/**
* @LuisStarlino
* Created AT: 15/04/2023 | 22:16
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, GENERAL_STYLE, IMAGES } from '../../utilities/route';
import { cardsContainer, iconTopContainer, imageContainer, infoSec, logoubtn, scrollContainer } from './style';
import { Divider } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoadingFrame from '../../components/LoadingFrame/LoadingFrame';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation, route }) => {

    //------------------------------------------------
    // --- USE EFFECT'S
    //------------------------------------------------
    useEffect(() => {
        setLoading(true);
        getUserInformation();
        setLoading(false);
    }, [])

    //------------------------------------------------
    // --- CONST'S
    //------------------------------------------------
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState([]);

    //------------------------------------------------
    // --- ASYNC STORAGE
    //------------------------------------------------
    const getUserInformation = async () => {

        try {
            const value = await AsyncStorage.getItem('@vetapp:user')
            if (value !== null) {
                let _json = JSON.parse(value); //console.log(_json[0].name);
                _json[0].clinic_address = _json[0].clinic_address.slice(0,20).concat('...');
                console.log(_json[0].clinic_address)
                setInfo(_json[0]);
            }
        } catch (e) {
            console.log("erro -->" + e);
            alert(e);
        }


    }

    //------------------------------------------------
    // --- FUNCTION'S
    //------------------------------------------------
    function renderBackImage() {
        return (
            <View style={scrollContainer.imgBg}>
                <LinearGradient
                    colors={[COLORS.BG_TESTE, COLORS.BLUE]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.0, y: 1.0 }}
                    style={{ width: '100%', height: '100%' }}
                >
                    {/* IMG */}
                    <Image source={IMAGES._myself} style={scrollContainer.img} blurRadius={9} />
                </LinearGradient>
            </View>
        )
    }

    function renderFixedInfos() {
        return (
            <LinearGradient
                style={scrollContainer.infoContainer}
                colors={[COLORS.WHITE, COLORS.WHITE]} // start={{ x: 0.0, y: 1.0 }} // end={{ x: 1, y: 0.15 }} 
            >
                {/* TOUPIMAGE */}
                <View style={imageContainer.main}>
                    <Image source={IMAGES._myself} style={imageContainer.image} />
                </View>

                {/* USER INFO --- SECTION */}
                <View style={infoSec.user}>
                    <Text style={infoSec.name}>{info?.name ?? ""}</Text>
                    <Text style={infoSec.email}>{info?.mail?? ""}</Text>
                    {/* <Text style={infoSec.txt}>Belo Horizonte, MG</Text> */}
                </View>

                {/* DIVIDER */}
                <Divider
                    style={{ width: "100%", margin: 20 }}
                    color={COLORS.DARK_BLUE}
                    insetType="left"
                    subHeader="React native elements"
                    subHeaderStyle={{}}
                    width={1}
                    orientation="horizontal"
                />

                {/* PERSONAL INFORMATIONS */}

                <LinearGradient
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 0.2, y: 0.15 }}
                    colors={[COLORS.BG_TESTE, COLORS.BLUE]}
                    style={cardsContainer.main}>

                    {/* TITLE */}
                    <Text style={[GENERAL_STYLE.title, cardsContainer.title]}>Minhas informações</Text>

                    {/* ITENS CARD */}
                    <View style={{ gap: 4 }}>
                        <View style={cardsContainer.itemContainer}>
                            <Text>Nome:</Text>
                            <Text>{info?.name ?? ""}</Text>
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text>Email:</Text>
                            <Text>{info?.mail ?? ""}</Text>
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text>Telefone:</Text>
                            <Text>{info?.phone ?? ""}</Text>
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text>CPF:</Text>
                            <Text>{info?.cpf ?? ""}</Text>
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text>Sexo:</Text>
                            <Text>{info?.gender ?? ""}</Text>
                        </View>
                    </View>

                </LinearGradient>

                {/* CLINICAL INFORMATIONS */}

                <LinearGradient
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 0.2, y: 0.15 }}
                    colors={[COLORS.BG_TESTE, COLORS.BLUE]}
                    style={cardsContainer.main}>

                    {/* TITLE */}
                    <Text style={[GENERAL_STYLE.title, cardsContainer.title]}>Dados Profissionais</Text>

                    {/* ITENS CARD */}
                    <View style={{ gap: 4 }}>
                        <View style={cardsContainer.itemContainer}>
                            <Text>Clínica:</Text>
                            <Text>{info?.clinic_name ?? ""}</Text>
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text>Endereço:</Text>
                            <Text>{info?.clinic_address ?? ""}</Text>
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text>Telefone:</Text>
                            <Text>{info?.clinic_phone ?? ""}</Text>
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text>Funcionamento:</Text>
                            <Text>{info?.clinic_working_time ?? ""}</Text>
                        </View>
                    </View>

                </LinearGradient>


                {/* LOGOUT BTN */}
                <TouchableOpacity style={logoubtn.container}>
                    <Text style={logoubtn.txt}>Sair da conta</Text>
                </TouchableOpacity>


            </LinearGradient>
        )
    }

    function renderIconsTop() {
        return (
            <View style={iconTopContainer.main}>

                {/* GO BACK */}
                <TouchableOpacity style={iconTopContainer.btn} onPress={() => { navigation.goBack() }}>
                    <Icon name={"arrow-left-thin"} color={COLORS.WHITE} size={30} />
                </TouchableOpacity>

                {/* EDIT */}
                <TouchableOpacity style={iconTopContainer.btn}>
                    <Icon name={"account-edit"} color={COLORS.WHITE} size={30} />
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <ScrollView style={scrollContainer.main}>

            {/* LOADING FRAME POP-UP */}
            <LoadingFrame
                visible={loading}
                color={COLORS.LIGHT_BLUE}
            />

            {/* IMAGE EFECCTS */}
            {renderBackImage()}

            {/* USER FIXED INFO */}
            {renderFixedInfos()}

            {/* ICONS */}
            {renderIconsTop()}

        </ScrollView>
    )
}

export default Profile;