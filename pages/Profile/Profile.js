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
import { COLORS, GENERAL_STYLE, IMAGES } from '../../utilities/route';
import { modalEdit, cardsContainer, iconTopContainer, imageContainer, infoSec, logoubtn, scrollContainer, modalContainer } from './style';
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
    const [editMode, setEditMode] = useState(false);
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
                //console.log(_json.clinic_address)
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

    //------------------------------------------------
    // --- EDIT PROFILE
    //------------------------------------------------
    const [editInfo, setEditInfo] = useState({
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

    const onHandleChange = (key, val) => {

        if (key === editInfo[key].attr) {
            setEditInfo({
                ...editInfo,
                [key]: {
                    ...editInfo[key],
                    value: val
                }
            })
        }

    }

    function renderModalEdit() {
        return (
            <Modal isVisible={editMode}
                animationIn={"zoomIn"}
                animationOut={"zoomOut"}
                animationOutTiming={400}
                style={modalEdit.main}
            >
                {/* TOP BTNS */}


                {/* MAIN TEXT */}
                <ScrollView style={modalEdit.container}>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={[GENERAL_STYLE.title, { color: COLORS.BLUE }]}>Editar informações do perfil</Text>
                    </View>

                    {/* NOME */}
                    <View style={[modalEdit.inputContainer, { marginTop: 50 }]}>
                        <Text style={modalEdit.textInput}>Nome:</Text>
                        <View style={modalEdit.inputArea}>
                            <TextInput
                                style={{ color: COLORS.BLUE, paddingLeft: 15 }}
                                value={editInfo.name.value}
                            />
                        </View>
                    </View>
                </ScrollView>

            </Modal>
        )
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
                <TouchableOpacity style={imageContainer.main}>
                    <Image source={IMAGES._myself} style={imageContainer.image} />
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
                    <Icon name={"arrow-left"} color={COLORS.LIGHT_GRAY} size={30} />
                </TouchableOpacity>

                {/* EDIT */}
                <TouchableOpacity style={iconTopContainer.btn} onPress={() => {navigation.navigate('EditProfile')}}>
                    <Icon name={"account-edit"} color={COLORS.LIGHT_GRAY} size={30} />
                    <Text style={{ color: COLORS.LIGHT_GRAY, fontWeight: "600" }}>{"Editar"}</Text>
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

            {/* MODAL EDIT */}
            {renderModalEdit()}

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