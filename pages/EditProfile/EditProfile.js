/**
* @LuisStarlino
* Created AT: 20/04/2023 | 19:32
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
    TextInput,
} from 'react-native';
import AlertMessage from '../../components/Modal/ModalText';
import {
    dummyCastrations,
    GENERAL_STYLE,
    IMAGE_STYLE,
    dummyChart,
    COLORS,
    IMAGES,
    SIZES,
    BAAS
} from '../../utilities/route';
import LoadingFrame from '../../components/LoadingFrame/LoadingFrame';
import { headerStyles, infoContainer } from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Divider } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

//_______________MAIN_____________________________
const EditProfile = ({ navigation, route }) => {

    useEffect(() => {
        setLoading(true);
        getUserInformation();
        setLoading(false);
    }, [])

    //------------------------------------------------
    // --- CONST'S
    //------------------------------------------------
    // --- Modal Config
    const [loading, setLoading] = useState(false);
    const [userID, setUserID] = useState(null);
    const [modal, setModal] = useState({ visible: false, text: '', action: out, type: 'alert' });

    const [editJson, setEditJson] = useState({
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

    const out = () => { setModal({ visible: false }); };

    //------------------------------------------------
    // --- ASYNC STORAGE
    //------------------------------------------------
    const getUserInformation = async () => {

        try {
            const value = await AsyncStorage.getItem('@vetapp:user')
            if (value !== null) {
                let _json = JSON.parse(value);
                setUserID(_json.id);
                _json.clinic_address = _json.clinic_address.slice(0, 20).concat('...');
                setEditJson({
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

    const onSubmit = async () => {

        setModal({
            visible: true,
            text: "Deseja atualizar seus dados no nosso sistema?",
            action: updateData,
            type: 'user'
        })
        return false;
    }

    const updateData = async () => {
        try {
            setLoading(true);

            const update = await BAAS.updateUserInformation({ id: userID, updateData: editJson })

            if (update) {

                out(); // --- Out
                setLoading(false);
                navigation.replace('Tab')
            }

        } catch (error) {

            setLoading(false);

            setModal({
                visible: true,
                text: error,
                action: out,
                type: 'alert'
            })
        }
    }

    const onHandleChange = (key, val) => {

        if (key === editJson[key].attr) {
            setEditJson({
                ...editJson,
                [key]: {
                    ...editJson[key],
                    value: val
                }
            })
        }

    }


    return (
        <View>

            {/* ICON AND PHOTOS */}
            <LinearGradient
                colors={[COLORS.BG_TESTE, COLORS.BLUE]}
                start={{ x: 0.9, y: 0.9 }}
                end={{ x: 0, y: 0.5 }}
                style={headerStyles.container}>

                <TouchableOpacity style={headerStyles.btn} onPress={() => { navigation.goBack() }}>
                    <Icon name={"arrow-left"} color={COLORS.WHITE} size={30} />
                </TouchableOpacity>

                <TouchableOpacity style={headerStyles.btn} onPress={() => onSubmit()}>
                    <Icon name={"check"} color={COLORS.WHITE} size={30} />
                    <Text>Salvar</Text>
                </TouchableOpacity>


            </LinearGradient>

            <ScrollView style={headerStyles.scroolArea}>

                {/* MODAL POP-UP */}
                <AlertMessage
                    action={modal.action}
                    outClick={out}
                    message={modal.text}
                    visible={modal.visible}
                    type={modal.type}
                    btnTxt1={"Atualizar"}
                />

                {/* LOADING FRAME POP-UP */}
                <LoadingFrame
                    visible={loading}
                    color={COLORS.LIGHT_BLUE}
                />



                <View style={infoContainer.container}>

                    <Text style={[GENERAL_STYLE.title, { marginBottom: -10 }]}>Minhas informações</Text>

                    {/* NAME */}
                    <View style={infoContainer.card}>
                        <Text style={infoContainer.cardlabel}>Nome:</Text>
                        <View style={infoContainer.inputArea}>
                            <TextInput
                                value={editJson.name.value}
                                style={infoContainer.inputTxt}
                                onChangeText={value => onHandleChange('name', value)}
                            />
                        </View>
                    </View>

                    {/* EMAIL */}
                    <View style={infoContainer.card}>
                        <Text style={infoContainer.cardlabel}>Email:</Text>
                        <View style={infoContainer.inputArea}>
                            <TextInput
                                value={editJson.mail.value}
                                style={infoContainer.inputTxt}
                                onChangeText={value => onHandleChange('mail', value)}
                            />
                        </View>
                    </View>

                    {/* CELLPHONE */}
                    <View style={infoContainer.card}>
                        <Text style={infoContainer.cardlabel}>Telefone:</Text>
                        <View style={infoContainer.inputArea}>
                            <TextInput
                                value={editJson.phone.value}
                                style={infoContainer.inputTxt}
                                onChangeText={value => onHandleChange('phone', value)}
                            />
                        </View>
                    </View>

                    {/* CPF */}
                    <View style={infoContainer.card}>
                        <Text style={infoContainer.cardlabel}>CPF:</Text>
                        <View style={infoContainer.inputArea}>
                            <TextInput
                                value={editJson.cpf.value}
                                style={infoContainer.inputTxt}
                                onChangeText={value => onHandleChange('cpf', value)}
                            />
                        </View>
                    </View>

                    {/* GENDER */}
                    <View style={infoContainer.card}>
                        <Text style={infoContainer.cardlabel}>Sexo:</Text>
                        <View style={infoContainer.inputArea}>
                            <TextInput
                                value={editJson.gender.value}
                                style={infoContainer.inputTxt}
                                onChangeText={value => onHandleChange('gender', value)}
                            />
                        </View>
                    </View>
                </View>

                {/* DIVIDER */}
                <Divider
                    style={{ width: "100%", paddingTop: 40 }}
                    color={COLORS.BLUE}
                    insetType="left"
                    subHeader="React native elements"
                    subHeaderStyle={{}}
                    width={1}
                    orientation="horizontal"
                />

                <View style={infoContainer.container}>

                    <Text style={[GENERAL_STYLE.title, { marginTop: -20, marginBottom: -10 }]}>Dados Profissionais</Text>

                    {/* NAME */}
                    <View style={infoContainer.card}>
                        <Text style={infoContainer.cardlabel}>Clínica:</Text>
                        <View style={infoContainer.inputArea}>
                            <TextInput
                                value={editJson.clinic_name.value}
                                style={infoContainer.inputTxt}
                                onChangeText={value => onHandleChange('clinic_name', value)}
                            />
                        </View>
                    </View>

                    {/* Address */}
                    <View style={infoContainer.card}>
                        <Text style={infoContainer.cardlabel}>Endereço:</Text>
                        <View style={infoContainer.inputArea}>
                            <TextInput
                                value={editJson.clinic_address.value}
                                style={infoContainer.inputTxt}
                                onChangeText={value => onHandleChange('clinic_address', value)}
                            />
                        </View>
                    </View>

                    {/* CELLPHONE */}
                    <View style={infoContainer.card}>
                        <Text style={infoContainer.cardlabel}>Telefone:</Text>
                        <View style={infoContainer.inputArea}>
                            <TextInput
                                value={editJson.clinic_phone.value}
                                style={infoContainer.inputTxt}
                                onChangeText={value => onHandleChange('clinic_phone', value)}
                            />
                        </View>
                    </View>

                    {/* WORKING TIME */}
                    <View style={infoContainer.card}>
                        <Text style={infoContainer.cardlabel}>Funcionamento:</Text>
                        <View style={infoContainer.inputArea}>
                            <TextInput
                                value={editJson.clinic_working_time.value}
                                style={infoContainer.inputTxt}
                                onChangeText={value => onHandleChange('clinic_working_time', value)}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ marginBottom: 180, marginTop: 50 }}>
                    <TouchableOpacity style={infoContainer.btnArea} onPress={() => onSubmit()}>
                        <Text style={[infoContainer.txt]}>Atualizar Informações</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}

export default EditProfile;