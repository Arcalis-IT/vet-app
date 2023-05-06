/**
* @LuisStarlino
* Created AT: 09/04/2023 | 19:22
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { COLORS, BAAS, } from '../../utilities/route'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import PassIcon from 'react-native-vector-icons/Ionicons';
import { btnContainer, iconContainer, inputsContainer, mainContainer, textContainer } from './style';
import { useState, useEffect } from 'react';
import AlertMessage from '../../components/Modal/ModalText';
import LoadingFrame from '../../components/LoadingFrame/LoadingFrame';
import AsyncStorage from '@react-native-async-storage/async-storage';


//_______________MAIN_____________________________
const Login = ({ navigation, route }) => {

    //------------------------------------------------
    // --- USE EFFECT'S
    //------------------------------------------------
    useEffect(() => {
        setLoading(true);
        checkUser();
        // setLoading(false);
    }, [])

    //------------------------------------------------
    // --- CHECK USER
    //------------------------------------------------
    const checkUser = async () => {

        try {
            const value = await AsyncStorage.getItem('@vetapp:loginON')            
            if (value !== null) { // --- EXIST A SECCTION, GET DATA FROM THIS ID

                setLoading(true);
                await BAAS.getUserData({ id: value });

                navigation.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'Tab'
                        },
                    ],
                })
            }else {
                setLoading(false);
            }    
        } catch (e) {
            console.log("esse é o erro --> " + e);
            setLoading(false);
            setModal({
                visible: true,
                text: e,
                action: out,
                type: 'alert'
            })
        }

    }



    //------------------------------------------------
    // --- CONST'S
    //------------------------------------------------
    const [inputForm, setInputForm] = useState({
        user: {
            attr: 'user',
            value: ''
        },
        password: {
            attr: 'password',
            value: ''
        },
    })
    const [showPwd, setShowPwd] = useState(false);

    // --- Modal Config
    const [modal, setModal] = useState({ visible: false, text: '', action: out, type: 'alert' });
    const [loading, setLoading] = useState(false);

    const out = () => {
        setModal({ visible: false });
    };

    //------------------------------------------------
    // --- HANDLE'S
    //------------------------------------------------
    const onHandleChange = (key, val) => {

        if (key === inputForm[key].attr) {
            setInputForm({
                ...inputForm,
                [key]: {
                    ...inputForm[key],
                    value: val
                }
            })
        }

    }

    //------------------------------------------------
    // --- LOGGIN
    //------------------------------------------------
    const onSubmit = async () => {

        // --- CHECK INFO
        if (inputForm.user.value == '' || inputForm.password.value == '') {

            setModal({
                visible: true,
                text: "Preencha todos os campos para entrar",
                action: out,
                type: 'alert'
            })
            return false;
        }

        // --- CHECK PASS 
        if (inputForm.password.value.length < 6) {

            setModal({
                visible: true,
                text: "Senha incorreta, tente novamente!",
                action: out,
                type: 'alert'
            })
            return false;
        }

        // --- DO LOGIN

        try {
            // --- loading
            setLoading(true);

            const user = await BAAS.authentication({
                user: inputForm.user.value,
                pass: inputForm.password.value,
            })

            // --- GO TO HOMEPAGE and send userID            
            // navigation.reset('Tab', {
            //     screen: 'Home',
            //     params: { userId: user?.user.uid },
            // })

            navigation.reset({
                index: 0,
                routes: [
                    {
                        name: 'Tab',
                        params: { userId: user?.user.uid }
                    },
                ],
            })

            setLoading(false);

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

    //------------------------------------------------
    // --- FUNCTION'S
    //------------------------------------------------
    function renderIcon() {
        return (
            <TouchableOpacity style={iconContainer.main}
                onPress={() => navigation.goBack()}
            >
                <Icon name={"back"} color={COLORS.WHITE} size={30} />
            </TouchableOpacity>
        )
    }

    function renderTexts() {
        return (
            <View style={textContainer.container}>
                <Text style={textContainer.mainText}>Entre com suas credenciais.</Text>

                <Text style={textContainer.simpleText}>{`Bem vindo de volta!`}</Text>
            </View>
        )
    }

    function renderInputs() {
        return (
            <View style={inputsContainer.container}>
                {/* email */}
                <View style={inputsContainer.inputArea}>
                    <TextInput
                        placeholder={"Telefone, usuário ou email"}
                        value={inputForm.user.value}
                        onChangeText={value => onHandleChange('user', value)}
                    />
                </View>

                {/* password */}
                <View style={inputsContainer.inputArea}>
                    {/* ICON */}
                    <TouchableOpacity style={inputsContainer.showPass} onPress={() => setShowPwd(!showPwd)}>
                        <PassIcon name={!showPwd ? "eye-off-sharp" : "eye-sharp"} size={25} color={COLORS.WHITE} />
                    </TouchableOpacity>

                    <TextInput
                        placeholder={"Senha"}
                        secureTextEntry={!showPwd ? true : false}
                        value={inputForm.password.value}
                        style={{ width: '80%' }}
                        onChangeText={value => onHandleChange('password', value)}
                    />
                </View>
            </View>
        )
    }

    function renderBtn() {
        return (
            <View style={btnContainer.container}>
                <TouchableOpacity style={btnContainer.btnArea1} onPress={() => onSubmit()}>
                    <Text style={[btnContainer.txt, { color: COLORS.BLUE }]}>Entrar</Text>
                </TouchableOpacity>
                <View style={btnContainer.textArea}>
                    <Text style={btnContainer.textStyle}>Não possui um conta?</Text>
                    <TouchableOpacity>
                        <Text style={[btnContainer.textStyle, { fontWeight: "bold" }]}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 2.5, y: 1.5 }}
                colors={[
                    COLORS.BG_TESTE,
                    COLORS.BLUE
                ]}
                //style={style.container.gradient}
                style={mainContainer.container}
            >

                {/* MODAL POP-UP */}
                <AlertMessage
                    action={modal.action}
                    outClick={out}
                    message={modal.text}
                    visible={modal.visible}
                    type={modal.type}
                />

                {/* LOADING FRAME POP-UP */}
                <LoadingFrame
                    visible={loading}
                    color={COLORS.LIGHT_BLUE}
                />


                {/* ICON */}
                {renderIcon()}

                {/* TEXT */}
                {renderTexts()}

                {/* INPUTS */}
                {renderInputs()}

                {/* BTN */}
                {renderBtn()}

            </LinearGradient>
        </View>
    )
}

export default Login;