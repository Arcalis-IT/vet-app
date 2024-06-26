/**
* @LuisStarlino
* Created AT: 02/04/2023 | 19:55
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
} from 'react-native';
import {
    GENERAL_STYLE,
    STORAGE_BAAS,
    DYNAMIC_BAAS,
    IMAGE_STYLE,
    dummyChart,
    COLORS,
    IMAGES,
    SIZES,
    BAAS
} from '../../utilities/routes';
import moment from 'moment';
import Modal from 'react-native-modal';
import openMap from 'react-native-open-maps';
import { useEffect, useRef, useState } from 'react';
import Icon4 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-reanimated-carousel';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { ModalBox, SplashScreen } from '../../components/routes';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingFrame from '../../components/LoadingFrame/LoadingFrame';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { grettingsBoxStyle, mainBox, dotBox, modalBox, chartBox } from './style';

//_______________MAIN_____________________________
const Home = ({ navigation, route }) => {

    // Caso um dia precise user um parms que chega do login direto const { userId } = route.params ?? null ;

    //------------------------------------------------
    // --- USE EFFECT'S
    //------------------------------------------------
    useEffect(() => {
        //setLoading(true);
        setShowSplash(true);
        getUser();
    }, [])

    //------------------------------------------------
    // --- CONST'S
    //------------------------------------------------
    const mainModalRef = useRef();
    const [loading, setLoading] = useState(false);
    const [appointments, setAppointments] = useState(null);
    const [reports, setReports] = useState(null);
    const [modalIndex, setModalIndex] = useState(0);
    const [photoURL, setPhotoURL] = useState(null);
    const [userData, setUserData] = useState({
        name: '',
        id: ''
    })

    // --- Splash Control
    const [showSplash, setShowSplash] = useState(false);

    //------------------------------------------------
    // --- ASYNC STORAGE
    //------------------------------------------------
    const getUser = async () => {

        try {
            const value = await AsyncStorage.getItem('@vetapp:user')

            if (value !== null) {

                let _json = JSON.parse(value);
                setUserData({ name: _json?.name, id: _json?.id })

                // --- GET APPOINTMENTS
                await getAppointments(_json?.id);

                // --- GET REPORTS
                await getReportsBar(_json?.id)

                // --- GET PHOTO
                await getPhoto();
            }
        } catch (e) {
            console.log("erro -->" + e);
            alert(e);
        }
    }

    

    /**************************************************************************************
    // @LuisStarlino |  01/06/2023  17"33
    //  --- Pegando as informações para o CHARBAR
    /***************************************************************************************/
    const getReportsBar = async (id) => {
        const tempRep = await BAAS.getGeneralReports(id);

        if (tempRep) setReports(tempRep);
    }

    /**************************************************************************************
    // @LuisStarlino |  30/05/2023  21"10
    //  --- Pegando a foto do usuário
    /***************************************************************************************/
    const getPhoto = async () => {
        const photoURL = await AsyncStorage.getItem('@vetapp:userPhoto');

        if (photoURL) {
            var temp_JSON = JSON.parse(photoURL);
            setPhotoURL(temp_JSON?.url);
        } else {
            console.log("Erro ao pegar sua foto");
        }

        // --- USE THIS TO SHOW THE PHOTO IN THE TIME.
        const timeout = setTimeout(() => {
            //setLoading(false);
            setShowSplash(false);
            clearTimeout(timeout);
        }, 3000);
    }

    /**************************************************************************************
    // @LuisStarlino |  07/05/2023  09"54
    //  --- Nova função que monta a exibição das consultas.
    /***************************************************************************************/
    const getAppointments = async (id) => {
        try {
            //const value = await BAAS.getAppointments(id);
            const value = await DYNAMIC_BAAS.getAppointmentsDinamicWithLimit(id, 7);
            if (value != null && value.length > 0 && value[0] != undefined) {
                setAppointments(value);
            }
        } catch (e) {
            console.log("erro -->" + e);
            alert(e);
        }
    }

    //------------------------------------------------
    // --- MODAL
    //------------------------------------------------
    const changeMainModal = ({ newIndex }) => {
        setModalIndex(newIndex); //refT.current?.next()
        mainModalRef.current?.scrollTo({ index: newIndex, animated: false });
    }

    // --- Details Modal
    const [showModal, setShowModal] = useState(false);
    const [modalItem, setModalItem] = useState(null);

    const configurateModal = (item) => {
        setShowModal(true);
        setModalItem(item);
    }

    //------------------------------------------------
    // --- GOOGLE MAP'S
    //------------------------------------------------
    function goToMap({ lat, long, address }) {
        openMap({ latitude: lat, longitude: long, end: address, start: "R. Queluzita, 614 - Fernão Dias, Belo Horizonte - MG, 31910-000" });
    }

    //------------------------------------------------
    // --- FUNCTION'S
    //------------------------------------------------
    function renderModalDetails() {
        return (
            <Modal isVisible={showModal}
                //key={modalItem?.id}
                style={{ alignItems: 'center' }}
                onBackdropPress={() => setShowModal(false)}
                animationIn={"fadeIn"}
            >
                <View style={modalBox.container}>
                    {/* TITLE */}
                    <Text style={modalBox.title}>Dados do compromisso</Text>

                    {/* DETAILS */}
                    <View style={modalBox.detailsBox}>
                        <View style={modalBox.line}>
                            <View style={modalBox.lineTitle}>
                                <Icon2 name={"medicinebox"} size={20} color={COLORS.WHITE} />
                                <Text style={modalBox.typeName}>Descrição:</Text>
                            </View>
                            <Text style={modalBox.dataName}>{modalItem?.description}</Text>
                        </View>
                    </View>

                    <View style={modalBox.detailsBox}>
                        <View style={modalBox.line}>
                            <View style={modalBox.lineTitle}>
                                <Icon3 name={"calendar"} size={20} color={COLORS.WHITE} />
                                <Text style={modalBox.typeName}>Data:</Text>
                            </View>
                            <Text style={modalBox.dataName}>{moment(modalItem?.date.toDate()).format('DD/MM/YYYY')}</Text>
                        </View>
                    </View>

                    <View style={modalBox.detailsBox}>
                        <View style={modalBox.line}>
                            <View style={modalBox.lineTitle}>
                                <Icon2 name={"clockcircleo"} size={20} color={COLORS.WHITE} />
                                <Text style={modalBox.typeName}>Hora:</Text>
                            </View>
                            <Text style={modalBox.dataName}>{modalItem?.hour}</Text>
                        </View>
                    </View>

                    <View style={modalBox.detailsBox}>
                        <View style={modalBox.line}>
                            <View style={modalBox.lineTitle}>
                                <Icon name={"person"} size={20} color={COLORS.WHITE} />
                                <Text style={modalBox.typeName}>Dono(a) do animal:</Text>
                            </View>
                            <Text style={modalBox.dataName}>{modalItem?.onwer}</Text>
                        </View>
                    </View>

                    <View style={modalBox.detailsBox}>
                        <View style={modalBox.line}>
                            <View style={modalBox.lineTitle}>
                                <Icon name={"person"} size={20} color={COLORS.WHITE} />
                                <Text style={modalBox.typeName}>Descrição do Animal:</Text>
                            </View>
                            <Text style={modalBox.dataName}>{modalItem?.animal.charAt(0).toUpperCase() + modalItem?.animal.slice(1)} | {modalItem?.animal_name} </Text>
                        </View>
                    </View>

                    <View style={modalBox.detailsBox}>
                        <View style={modalBox.line}>
                            <View style={modalBox.lineTitle}>
                                <Icon4 name={"address"} size={20} color={COLORS.WHITE} />
                                <Text style={modalBox.typeName}>Endereço:</Text>
                            </View>
                            <Text style={modalBox.dataName}>{modalItem?.address}</Text>
                        </View>
                    </View>

                    <View style={modalBox.detailsBox}>
                        <View style={modalBox.line}>
                            <View style={modalBox.lineTitle}>
                                <Icon name={"person"} size={20} color={COLORS.WHITE} />
                                <Text style={modalBox.typeName}>Obs:</Text>
                            </View>
                            <Text style={modalBox.dataName}>{modalItem?.comments}</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={modalBox.mapBtn} onPress={() =>
                        console.log("Alterar")
                        //goToMap({ lat: modalItem?.maps.latitude, long: modalItem?.maps.longitude, address: modalItem?.address })
                    }>
                        <Icon5 name={"google-maps"} size={20} color={COLORS.BLUE} />
                        <Text style={modalBox.mapTxt}>Ver no mapa</Text>
                    </TouchableOpacity>


                </View>
            </Modal>
        )
    }

    function renderGrettingsBox() {
        return (
            <View style={{ backgroundColor: COLORS.BLUE, paddingBottom: 30 }}>
                <ImageBackground source={IMAGES.home_bg} style={grettingsBoxStyle.container}>

                    {/* PROFILE PHOTO */}
                    {photoURL &&
                        <TouchableOpacity style={grettingsBoxStyle.imageBox} onPress={
                            () => { navigation.navigate("Profile") }
                        }>
                            <Image
                                source={!photoURL ? IMAGES.loadingIMG : { uri: photoURL }}
                                style={IMAGE_STYLE.imageIcon}
                            />
                        </TouchableOpacity>
                    }

                    {/* GRETTINGS - HELLO DR */}
                    <View>
                        <Text style={grettingsBoxStyle.doctorName}>Olá,</Text>
                        <Text style={grettingsBoxStyle.doctorName}>Dr. {userData.name ?? ""}</Text>
                    </View>

                    {/* HAVE A NICE DAY - PHASE */}
                    <Text style={grettingsBoxStyle.subtitle}>Tenha um ótimo dia!</Text>
                </ImageBackground>
            </View>
        )
    }

    function renderNextsAppointments() {
        return (
            <View>
                {appointments != null && <>

                    <Text style={GENERAL_STYLE.title}>Próximos Atendimentos</Text>

                    <View>
                        <Carousel
                            loop
                            width={SIZES.WIDTH * 0.9}
                            height={SIZES.WIDTH / 2.5}
                            data={appointments}
                            scrollAnimationDuration={1000}
                            onSnapToItem={(index) => {
                                setModalIndex(index); //const indexT = refT.current?.getCurrentIndex();
                            }}
                            ref={mainModalRef}
                            renderItem={({ item, index }) => (
                                <ModalBox item={item} key={index}
                                    onPress={() => configurateModal(item)} />
                            )}
                        />

                        {/* --- Visual Dots --- */}
                        <View style={dotBox.container}>
                            {appointments.map((i, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => { changeMainModal({ newIndex: index }) }}
                                    >

                                        <Icon key={i.id}
                                            name={modalIndex == index ? "dot-fill" : "dot"}
                                            color={COLORS.BLUE}
                                            size={modalIndex == index ? 25 : 20}
                                        />

                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                </>}
            </View>
        )
    }

    function renderReports() {
        return (
            <View style={{ marginTop: SIZES.MARGIN }}>

                <>
                    <Text style={GENERAL_STYLE.title}>Gráficos de Atendimentos</Text>

                    {/* CHART BAR */}
                    <View style={chartBox.container}>
                        <VictoryChart width={400} theme={VictoryTheme.material}
                            height={SIZES.CHART_BOX} domainPadding={20} 
                            maxDomain={{ y: 5 }}

                        >
                            <VictoryBar
                                data={reports ?? dummyChart} x="type" y="number"
                                style={{ data: { fill: COLORS.BLUE } }}
                                alignment="middle"
                                animate={true}
                                barWidth={20}
                                labels={({ datum }) => `${parseInt(datum.number)}`}

                            />
                        </VictoryChart>
                    </View>

                    {/* SEND TO REPORTS PAGE */}
                    <View style={chartBox.btnContainer}>
                        <Text style={chartBox.callTxt}>Veja os relatórios completos</Text>
                        <TouchableOpacity style={chartBox.btn} onPress={(()=>{navigation.navigate('Reports')})}>
                            <Text style={chartBox.btnText}>Acessar</Text>
                            <Icon2 name={"arrowright"} color={COLORS.WHITE} size={15} />
                        </TouchableOpacity>
                    </View>
                </>

            </View>
        )
    }

    function renderFooter() {
        return (
            <View style={{ height: 400 }}>
                <Text style={{ color: COLORS.LIGHT_GRAY }}>HOME PAGE</Text>
            </View>
        )
    }


    return (
        <View>

            {showSplash && <SplashScreen/>}

            {/* MODAL DETAILS -- EVENTS*/}
            {renderModalDetails()}

            {/* LOADING FRAME POP-UP */}
            <LoadingFrame
                visible={loading}
                color={COLORS.LIGHT_BLUE}
            />

            {/* HEADER */}
            {renderGrettingsBox()}

            {/* MAIN CONTAINER */}
            <ScrollView style={[GENERAL_STYLE.scrollView, mainBox.container]}>

                {/* NEXT APPOINTMENTS */}
                {renderNextsAppointments()}

                {/* REPORTS PAGE */}
                {renderReports()}

                {renderFooter()}
                
            </ScrollView>


        </View>
    )
}

export default Home;