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
    const [editMode, setEditMode] = useState(false);
    const [info, setInfo] = useState([]);
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
    })

    //------------------------------------------------
    // --- ASYNC STORAGE
    //------------------------------------------------
    const getUserInformation = async () => {

        try {
            const value = await AsyncStorage.getItem('@vetapp:user')
            if (value !== null) {
                let _json = JSON.parse(value); //console.log(_json[0].name);
                _json[0].clinic_address = _json[0].clinic_address.slice(0, 20).concat('...');
                //console.log(_json[0].clinic_address)
                setInfo(_json[0]);
                setInfoJson({
                    name: {
                        attr: 'name',
                        value: _json[0]?.name
                    },
                    mail: {
                        attr: 'mail',
                        value: _json[0]?.mail
                    },
                    phone: {
                        attr: 'phone',
                        value: _json[0]?.phone
                    },
                    cpf: {
                        attr: 'cpf',
                        value: _json[0]?.cpf
                    },
                    gender: {
                        attr: 'gender',
                        value: _json[0]?.gender
                    },

                })

                setEditInfo({
                    name: {
                        attr: 'name',
                        value: _json[0]?.name
                    },
                    mail: {
                        attr: 'mail',
                        value: _json[0]?.mail
                    },
                    phone: {
                        attr: 'phone',
                        value: _json[0]?.phone
                    },
                    cpf: {
                        attr: 'cpf',
                        value: _json[0]?.cpf
                    },
                    gender: {
                        attr: 'gender',
                        value: _json[0]?.gender
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
                    <Text style={infoSec.name}>{infoJson.name.value ?? ""}</Text>
                    <Text style={infoSec.email}>{infoJson.mail.value ?? ""}</Text>
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
                    <View style={{ gap: 10 }}>
                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt}>Nome</Text>
                            <TextInput
                                style={editMode ? cardsContainer.inputEdit : cardsContainer.input}
                                value={editMode ? editInfo.name.value : infoJson.name.value}
                                editable={editMode ? true : false}
                                onChangeText={value => onHandleChange('name', value)}
                                
                            />
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt} >Email:</Text>
                            <TextInput
                                style={editMode ? cardsContainer.inputEdit : cardsContainer.input}
                                value={editMode ? editInfo.mail.value : infoJson.mail.value}
                                editable={editMode ? true : false}
                                onChangeText={value => onHandleChange('mail', value)}
                            />
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt} >Telefone:</Text>
                            <TextInput
                                style={editMode ? cardsContainer.inputEdit : cardsContainer.input}
                                value={editMode ? editInfo.phone.value : infoJson.phone.value}
                                editable={editMode ? true : false}
                                onChangeText={value => onHandleChange('pho', value)}
                            />
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt} >CPF:</Text>
                            <TextInput
                                style={editMode ? cardsContainer.inputEdit : cardsContainer.input}
                                value={editMode ? editInfo.cpf.value : infoJson.cpf.value}
                                editable={editMode ? true : false}
                                onChangeText={value => onHandleChange('v', value)}
                            />
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt} >Sexo:</Text>
                            <TextInput
                                style={editMode ? cardsContainer.inputEdit : cardsContainer.input}
                                value={editMode ? editInfo : infoJson ?? "".gender.value ?? ""}
                                editable={editMode ? true : false}
                                onChangeText={value => onHandleChange('va', value)}
                            />
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
                            <TextInput
                                style={editMode ? cardsContainer.inputEdit : cardsContainer.input}
                                value={info?.clinic_name ?? ""}
                                editable={false}
                            />
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt} >Endereço:</Text>
                            <TextInput
                                style={editMode ? cardsContainer.inputEdit : cardsContainer.input}
                                value={info?.clinic_address ?? ""}
                                editable={false}
                            />
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt} >Telefone:</Text>
                            <TextInput
                                style={editMode ? cardsContainer.inputEdit : cardsContainer.input}
                                value={info?.clinic_phone ?? ""}
                                editable={false}
                            />
                        </View>

                        <View style={cardsContainer.itemContainer}>
                            <Text style={cardsContainer.txt} >Funcionamento:</Text>
                            <TextInput
                                style={editMode ? cardsContainer.inputEdit : cardsContainer.input}
                                value={info?.clinic_working_time ?? ""}
                                editable={false}
                            />
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
                <TouchableOpacity style={iconTopContainer.btn} onPress={() => setEditMode(!editMode)}>
                    <Icon name={editMode ? "check" : "account-edit"} color={COLORS.WHITE} size={30} />
                    <Text style={{ color: COLORS.WHITE, fontWeight: "600" }}>{editMode ? "Salvar" : "Editar"}</Text>
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