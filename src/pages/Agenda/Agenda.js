/**
* @LuisStarlino
* Created AT: 18/07/2023 | 20:11
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
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import AlertMessage from '../../components/Modal/ModalText';
import { PaperProvider } from 'react-native-paper';
import { agendaTHEME, BAAS, COLORS, DYNAMIC_BAAS, GENERAL_STYLE, SIZES } from '../../utilities/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from '../../components/routes';
import Modal from 'react-native-modal';
import DetailsAp from '../../components/Details/Details';
import LoadingFrame from '../../components/LoadingFrame/LoadingFrame';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { useEffect, useState } from 'react';
import moment from "moment";
import style from './style';

/**************************************************************************************
// @LuisStarlino |  18/07/2023  18"46
//  --- Configurações de exibição da agenda, nomes em pt
/***************************************************************************************/
LocaleConfig.locales.pt = {
    monthNames: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthNamesShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    dayNames: 'Segunda_Terça_Quarta_Quinta_Sexta'.split('_'),
    dayNamesShort: 'Seg_Ter_Quar_Qui_Sex_Sab_Dom'.split('_'),
    today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt';


//_______________MAIN_____________________________
const AgendaScreen = ({ navigation, route }) => {

    //------------------------------------------------
    // --- CONST 
    //------------------------------------------------
    const [events, setEvents] = useState({});
    const [loading, setLoading] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showAgenda, setShowAgenda] = useState(false);

    const [modalAppt, setModalAppt] = useState({ visible: false, item: null, doneAction: null, cancelAction: null, outfunction: null });

    //------------------------------------------------
    // --- USE EFFECT'S
    //------------------------------------------------
    useEffect(()=>{
        setShowAgenda(false)
        setLoading(true);
        getCardsAgenda();
    },[route])

    //------------------------------------------------
    // --- FUNCTION'S
    //------------------------------------------------
    async function getCardsAgenda() {

        // --- Get User
        const userID = await AsyncStorage.getItem('@vetapp:user');

        if (userID !== null) { // --- Receive user

            let _json = JSON.parse(userID);

            // --- GET APPOINTMENTS
            await getAppointments(_json?.id);

        }
    }

    function openTheDetails() {

        setModalAppt({
            visible: true,
            cancelAction: null,
            doneAction: null,
            outfunction: (() => { setModalAppt({ visible: false }) })
        })
        
    }

    /**************************************************************************************
    // @LuisStarlino |  19/07/2023  21"20
    //  --- Nova função que monta a exibição das consultas para a agenda.
    /***************************************************************************************/
    const getAppointments = async (id) => {
        try {
            const array = {}; // --- Empyt
            const value = await BAAS.getAppointments(id);
            //const value2 = await DYNAMIC_BAAS.getAppointmentsDinamic(id);

            if (value != null && value.length > 0 && value[0] != undefined) {

                // --- MONTANDO O JSON DOS APPOINTMENTS
                value.map((i) => {

                    var tempDate = moment(i?.date.toDate()).format('YYYY-MM-DD');
                    var tempDesc = i?.description;
                    var tempHour = i?.hour;
                    var tempPetName = i?.animal_name;
                    var showTag = !i?.active;

                    if (!array[tempDate]) {
                        array[tempDate] = [];
                    }

                    array[tempDate].push({ name: tempPetName, desc: tempDesc, hour: tempHour, pet: tempPetName, fullData: i, showTag });
                });
                
                setEvents(array);
                
                const timeout = setTimeout(() => {
                    setShowAgenda(true);
                    setLoading(false);
                    clearTimeout(timeout);
                }, 3000);
                
            }
        } catch (e) {
            console.log("erro -->" + e);
            alert(e);
        }
    }

    function gBack() {
        navigation.goBack();
    }

    //------------------------------------------------
    // --- RENDER'S
    //------------------------------------------------
    function renderAgenda() {
        return (
            <View style={{ height: SIZES.HEIGHT * 0.65 }}>
                <Agenda
                    style={{ height: '100%' }}
                    theme={{ ...agendaTHEME }}
                    items={events} // --- Seting in a function
                    //selected={`${new Date().toDateString()}`} // Today
                    selected={`2023-05-10`} // JUST FOR TEST
                    renderItem={(item, isFirst) => (
                        <TouchableOpacity style={style.mainBoxView.main}
                            onPress={(() => {
                                // console.log(item);
                                navigation.navigate({ name: 'appointment', params: { props: item } });
                            })}>
                            {item.showTag == true  && // -- TAG CANCEL
                                <View style={style.cancelBox.main}>
                                    <Text style={style.cancelBox.txt}>Cancelado</Text>
                                </View>
                            }
                            <View style={style.mainBoxView.line}>
                                
                                <Text style={style.mainBoxView.txt}>{`${item.hour} - ${item.desc}`}</Text>
                            </View>
                            <View style={style.mainBoxView.line}>
                                <Text style={style.mainBoxView.txtName} >{`Pet: ${item.pet}`}</Text>
                            </View>
                        </TouchableOpacity>
                    )}

                    // Specify how empty date content with no items should be rendered
                    renderEmptyDate={() => {
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>DIA VAZIO</Text>
                        </TouchableOpacity>
                    }}

                    // Specify what should be rendered instead of ActivityIndicator
                    renderEmptyData={() => {
                        console.log("Dia vazio, colocar alguma animação!")
                    }}
                />
            </View>
        )
    }

    return (
        <View style={GENERAL_STYLE.communVIEW}>


            <Modal isVisible={showDetails}>
                <View>
                    <Text style={{ color: 'red' }}>OI</Text>
                </View>
            </Modal>

            {/* DETAILS MODAL FRAME */}
            <DetailsAp props={modalAppt} />

            {/* LOADING FRAME POP-UP */}
            <LoadingFrame
                visible={loading}
                color={COLORS.LIGHT_BLUE}
            />

            {/* HEADER */}
            <Header goBackFunc={gBack} />

            {/* TITLE */}
            <View style={{ marginTop: 30, marginBottom: 30 }}>
                <Text style={GENERAL_STYLE.title}>Sua agenda</Text>
            </View>

            {/* CALENDAR / AGENDA */}
            {showAgenda == true  && <>
                {renderAgenda()}
            </>}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
    itemText: {
        color: '#888',
        fontSize: 16,
    }
});

export default AgendaScreen;