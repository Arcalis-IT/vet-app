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
    ScrollView,
    TextInput
} from 'react-native';
import Modal from 'react-native-modal';
import { useEffect, useRef, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, GENERAL_STYLE, IMAGES, STORAGE_BAAS } from '../../utilities/routes';
import { modalEdit, cardsContainer, iconTopContainer, imageContainer, infoSec, logoubtn, scrollContainer, modalContainer } from './style';
import { Divider } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoadingFrame from '../../components/LoadingFrame/LoadingFrame';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation, route }) => {

    //------------------------------------------------
    // --- USE EFFECT'S
    //------------------------------------------------
    useEffect(() => {
        setLoading(true);
        getUserInformation();
        getUserPhoto();
        setLoading(false);
    }, [])

    //------------------------------------------------
    // --- CONST'S
    //------------------------------------------------
    const [loading, setLoading] = useState(false);
    const [userPhoto, setUserPhoto] = useState(null);
    const [infoJson, setInfoJson] = useState({
        name: {
            attr: 'name',
            value: ''
        },
        mail: {
            attr: 'mail',
            value: ''
        },
        phone: {
            attr: 'phone',
            value: ''
        },
        cpf: {
            attr: 'cpf',
            value: ''
        },
        gender: {
            attr: 'gender',
            value: ''
        },
        clinic_name: {
            attr: 'clinic_name',
            value: ''
        },
        clinic_address: {
            attr: 'clinic_address',
            value: ''
        },
        clinic_phone: {
            attr: 'clinic_phone',
            value: ''
        },
        clinic_working_time: {
            attr: 'clinic_working_time',
            value: ''
        },
    })

    //------------------------------------------------
    // --- ASYNC STORAGE
    //------------------------------------------------
    const getUserInformation = async () => {

        try {
            const value = await AsyncStorage.getItem('@vetapp:user')
            if (value !== null) {
                let _json = JSON.parse(value);
                _json.clinic_address = _json.clinic_address.slice(0, 20).concat('...');

                setInfoJson({
                    name: {
                        attr: 'name',
                        value: _json?.name
                    },
                    mail: {
                        attr: 'mail',
                        value: _json?.mail
                    },
                    phone: {
                        attr: 'phone',
                        value: _json?.phone
                    },
                    cpf: {
                        attr: 'cpf',
                        value: _json?.cpf
                    },
                    gender: {
                        attr: 'gender',
                        value: _json?.gender
                    },
                    clinic_name: {
                        attr: 'clinic_name',
                        value: _json?.clinic_name
                    },
                    clinic_address: {
                        attr: 'clinic_address',
                        value: _json?.clinic_address
                    },
                    clinic_phone: {
                        attr: 'clinic_phone',
                        value: _json?.clinic_phone
                    },
                    clinic_working_time: {
                        attr: 'clinic_working_time',
                        value: _json?.clinic_working_time
                    },
                })

            }
        } catch (e) {
            console.log("erro -->" + e);
            alert(e);
        }

    }

    const getUserPhoto = async () => {

        try {
            const value = await AsyncStorage.getItem('@vetapp:userPhoto')
            if (value) {
                let _json = JSON.parse(value);
                setUserPhoto(_json.url);
            }

        } catch (e) {
            console.log("erro -->" + e);
            alert(e);
        }
        //const _URL = STORAGE_BAAS.getPhotoFromStorage();
    }

    //------------------------------------------------
    // --- LOGOUT FUNCTION
    //------------------------------------------------
    async function logoutUSER() {

        setLoading(true);

        // --- LOGOUT
        auth().signOut();

        // --- Clear Async Storage
        await AsyncStorage.removeItem('@vetapp:loginON');

        navigation.reset({
            index: 0,
            routes: [
                {
                    name: 'Init'
                },
            ],
        })
        setLoading(false);
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
                    <Image
                        source={!userPhoto ? IMAGES.loadingIMG : { uri: userPhoto }}
                        style={scrollContainer.img} blurRadius={9} />
                </LinearGradient>
            </View>
        )
    }

    function renderFixedInfos() {
        return (
            <LinearGradient
                style={scrollContainer.infoContainer}
                colors={[COLORS.LIGHT_GRAY, COLORS.LIGHT_GRAY]} // start={{ x: 0.0, y: 1.0 }} // end={{ x: 1, y: 0.15 }} 
            >
                {/* TOUPIMAGE */}
                <TouchableOpacity style={imageContainer.main}>
                    <Image source={!userPhoto ? IMAGES.loadingIMG : { uri: userPhoto }} style={imageContainer.image} />
                </TouchableOpacity>

                {/* USER INFO --- SECTION */}
                <View style={infoSec.user}>
                    <Text style={infoSec.name}>{infoJson.name.value ?? ""}</Text>
                    <Text style={infoSec.email}>{infoJson.mail.value ?? ""}</Text>
                    {/* <Text style={infoSec.txt}>Belo Horizonte, MG</Text> */}
                </View>

                {/* DIVIDER */}
                <Divider
                    style={{ width: "100%", margin: 20 }}
                    color={COLORS.BG_TESTE}
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
                    <View style={{ gap: 15 }}>
                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt}>Nome</Text>
                            <Text style={cardsContainer.information}>{infoJson.name.value}</Text>
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt} >Email:</Text>
                            <Text style={cardsContainer.information}>{infoJson.mail.value}</Text>
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt} >Telefone:</Text>
                            <Text style={cardsContainer.information}>{infoJson.phone.value}</Text>
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt} >CPF:</Text>
                            <Text style={cardsContainer.information}>{infoJson.cpf.value}</Text>
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt} >Sexo:</Text>
                            <Text style={cardsContainer.information}>{infoJson.gender.value}</Text>
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

                    <View style={{ gap: 10 }}>
                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt} >Clínica</Text>
                            <Text style={cardsContainer.information}>{infoJson.clinic_name.value}</Text>
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt} >Endereço:</Text>
                            <Text style={cardsContainer.information}>{infoJson.clinic_address.value}</Text>
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt} >Telefone:</Text>
                            <Text style={cardsContainer.information}>{infoJson.clinic_phone.value}</Text>
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt} >Funcionamento:</Text>
                            <Text style={cardsContainer.information}>{infoJson.clinic_working_time.value}</Text>
                        </View>
                    </View>

                </LinearGradient>


                {/* LOGOUT BTN */}
                <TouchableOpacity style={logoubtn.container} onPress={() => logoutUSER()}>
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
                    <Icon name={"arrow-left"} color={COLORS.LIGHT_GRAY} size={30} />
                </TouchableOpacity>

                {/* EDIT */}
                <TouchableOpacity style={iconTopContainer.btn} onPress={() => { navigation.navigate('EditProfile') }}>
                    <Icon name={"account-edit"} color={COLORS.LIGHT_GRAY} size={30} />
                    <Text style={{ color: COLORS.LIGHT_GRAY, fontWeight: "600" }}>{"Editar"}</Text>
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <ScrollView style={[]}>

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