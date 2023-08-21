/**
* @LuisStarlino
* Created AT: 26/07/2023 | 20:18
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import {
    View,
    Image,
    Text,
    ImageBackground,
    ScrollView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import LoadingFrame from '../../components/LoadingFrame/LoadingFrame';
import Icons1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, SIZES, IMAGES, BAAS } from '../../utilities/routes';
import AlertMessage from '../../components/Modal/ModalText';
import Icons2 from 'react-native-vector-icons/MaterialIcons'
import Icons3 from 'react-native-vector-icons/Feather'
import openMap from 'react-native-open-maps';
import moment from "moment";
import style from './style';
import { useState, useEffect } from 'react';
const Appointments = ({ navigation, route }) => {

    const { props } = route.params ?? null;

    useEffect(() => {
        changeDataPicker();
    }, [])
    //------------------------------------------------
    // --- CONST'S
    //------------------------------------------------

    // --- Modal Alert Config
    const [modal, setModal] = useState({ visible: false, text: '', action: out, type: 'alert', outfunction: out, btnTxt1: '', activeIcon2: false });
    const [loading, setLoading] = useState(false);
    const out = () => { setModal({ visible: false }); };

    // --- Rescheduling Config
    const [showRescheduling, setShowRescheduling] = useState(false);
    const [evtDate, setEvtDate] = useState();
    const [showDatePicker, setShowDatePicker] = useState(false);
    function changeDataPicker() {
        const originalDate = props?.fullData?.date?.toDate();
        setEvtDate(originalDate);
    }
    const changeAppointmentDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowDatePicker(false);
        setEvtDate(currentDate)
    }


    const [evtHour, setEvtHour] = useState(null);
    const [showHourPicker, setShowHourPicker] = useState(false);

    const changeAppointmentHour = (event, selectedHour) => {

        setShowHourPicker(false);

        // --- Set form
        const date = new Date(selectedHour);
        const timeString = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }).format(date);
        setEvtHour(timeString)
    }
    //------------------------------------------------
    // --- PAGE ACTION'S
    //------------------------------------------------
    const onUpdate = async () => {
        setLoading(true);
        const updateSucess = await BAAS.updateAppointment({
            idAppointment: props?.fullData?.id,
            dateNew: evtDate,
            hourNew: evtHour ?? props?.fullData?.hour
        })

        // --- Cancell this appointment
        if (updateSucess) {
            setLoading(false);
            setModal({
                visible: true,
                activeIcon2: true,
                text: `Compromisso atualizado com sucesso, você será redirecionado para a agenda novamente.`,
                action: (() => { navigation.navigate('Agenda', { reload: true }); }),
                out: (() => { navigation.navigate('Agenda', { reload: true }); }),
            })
        } else {
            setLoading(false);
            setModal({
                visible: true,
                text: cancel,
                action: out,
                type: 'alert',
                outfunction: out
            })
        }


    }
    const onSubmit = async (hasToCancel) => {
        setLoading(true);

        // --- Cancell this appointment
        if (hasToCancel) {
            const cancel = await BAAS.cancelAppointment(props?.fullData?.id);
            if (cancel == true) {
                setLoading(false);
                setModal({
                    visible: true,
                    activeIcon2: true,
                    text: `Compromisso cancelado com sucesso, você será redirecionado para a agenda novamente.`,
                    action: (() => { navigation.navigate('Agenda', { reload: true }); }),
                    out: (() => { navigation.navigate('Agenda', { reload: true }); }),
                })
            } else {
                setLoading(false);
                setModal({
                    visible: true,
                    text: cancel,
                    action: out,
                    type: 'alert',
                    outfunction: out
                })
            }
        }

    }
    //------------------------------------------------
    // --- FUNCTION'S
    //------------------------------------------------
    function cancelAppConfirm() {
        setModal({
            visible: true,
            text: `Deseja realmente cancelar esse compromisso?`,
            btnTxt1: 'Sim, cancelar',
            action: (() => { onSubmit(true) }),
            type: 'alert',
            outfunction: out
        })
    }

    function onSubmitReschedule() {

        setModal({
            visible: true,
            text: `Confirmar Alterações?\nData: ${moment(evtDate).format('DD/MM/YYYY')}\nHora:${evtHour ?? props?.fullData?.hour}`,
            btnTxt1: 'Sim, confirmar alterações',
            action: (() => { onUpdate() }),
            type: 'alert',
            outfunction: out
        })

    }


    function openMapUsingQuery() {
        openMap({ query: props.fullData.address });
    }

    // --- CONVERT DATA
    function convertData(dataAppt) {

        // --- Get Date from Firebase format
        const originalDate = dataAppt?.toDate();

        // ---  Return string
        return moment(originalDate).format('DD/MM/YYYY');


    }

    // --- UPPER FIRST LETTER
    function firstLetterUpper(word) {

        const arr = word.split(" ");

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }

        const str2 = arr.join(" ");

        return str2;
    }

    //------------------------------------------------
    // --- RENDER FUNCTION'S
    //------------------------------------------------

    function renderMainDetails() {
        return (
            <View style={style.infos.fullRow}>

                <View style={style.mainContainer.divider} />


                {/* ROW 1 - DATE AND TIME */}
                <View style={style.infos.row}>
                    <View style={style.infos.detailRow}>
                        <TouchableOpacity>
                            <Icons1 name={'calendar-month'} size={30} color={COLORS.BLUE} />
                        </TouchableOpacity>
                        <View style={style.infos.descArea}>
                            <Text style={style.infos.descriptionRow}>Data</Text>
                            <Text style={style.infos.infoRow}>{convertData(props?.fullData?.date)}</Text>
                        </View>
                    </View>
                    <View style={style.infos.detailRow}>
                        <TouchableOpacity>
                            <Icons1 name={'clock-time-five'} size={30} color={COLORS.BLUE} />
                        </TouchableOpacity>
                        <View style={style.infos.descArea}>
                            <Text style={style.infos.descriptionRow}>Horário</Text>
                            <Text style={style.infos.infoRow}>{props?.hour}</Text>
                        </View>
                    </View>
                </View>

                {/* ROW 2 - SERVICE & ANIMAL */}
                <View style={style.infos.row}>
                    <View style={style.infos.detailRow}>
                        <TouchableOpacity>
                            <Icons1 name={'notebook'} size={30} color={COLORS.BLUE} />
                        </TouchableOpacity>
                        <View style={style.infos.descArea}>
                            <Text style={style.infos.descriptionRow}>Serviço</Text>
                            <Text style={style.infos.infoRow}>{props?.desc}</Text>
                        </View>
                    </View>
                    <View style={style.infos.detailRow}>
                        <TouchableOpacity>
                            <Icons2 name={'pets'} size={30} color={COLORS.BLUE} />
                        </TouchableOpacity>
                        <View style={style.infos.descArea}>
                            <Text style={style.infos.descriptionRow}>Animal</Text>
                            <Text style={style.infos.infoRow}>{firstLetterUpper(props?.fullData?.animal)}</Text>
                        </View>
                    </View>
                </View>

                <View style={style.mainContainer.divider2} />

                {/* ROW  3 - OBS */}
                <View style={style.infos.singleRow}>
                    <Text style={style.infos.descriptionRow}>Observações</Text>
                    <Text style={style.infos.textArea}>{props?.fullData.comments}</Text>
                </View>

                <View style={style.mainContainer.divider2} />

                {/* ROW  4 - MAP */}
                <View style={style.map.area}>
                    <Text style={style.infos.descriptionRow}>Endereço</Text>
                    <Text style={style.infos.infoRow}>{props?.fullData.address}</Text>
                    <TouchableOpacity style={style.map.mapContainerView} onPress={openMapUsingQuery}>
                        <Image
                            source={IMAGES.staticMAP}
                            style={{ resizeMode: 'cover', width: '100%', height: '100%', borderRadius: SIZES.RADIUS }}
                        />
                    </TouchableOpacity>
                </View>




                <View style={style.mainContainer.divider2} />

                {/* ROW 5 - GENERAL INFOS */}
                <View style={style.generalInfos.container}>
                    <Text style={style.infos.descriptionRow}>Informações Gerais do compromisso</Text>
                    <View style={style.generalInfos.row}>
                        <Text style={style.generalInfos.desc}>• Inserido às: </Text>
                        <Text style={style.infos.infoRow}>{props?.fullData.insertAT}</Text>
                    </View>

                    {props?.fullData?.updated &&
                        <View style={style.generalInfos.row}>
                            <Text style={style.generalInfos.desc}>• Atualizado às: </Text>
                            <Text style={style.infos.infoRow}>{props?.fullData.updateAT}</Text>
                        </View>
                    }

                    {props?.showTag &&
                        <View style={style.generalInfos.row}>
                            <Text style={style.generalInfos.desc}>• Cancelado às: </Text>
                            <Text style={style.infos.infoRow}>{props?.fullData.cancelAT}</Text>
                        </View>
                    }
                </View>


                {/* ROW 7 - RESCREDULING AREA */}
                {showRescheduling &&
                    <>
                        <View style={style.mainContainer.divider2} />
                        <View style={style.inputStyles.container}>


                            {/* INPUTAREA 1 - DATE */}
                            <Text style={style.infos.descriptionRow}>Reagendar Compromisso</Text>

                            {/* DATE AREA */}
                            <View style={style.inputStyles.inputArea}>
                                <TextInput
                                    editable={false}
                                    style={style.inputStyles.txt}
                                    value={evtDate ? evtDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }) : convertData(props?.date)}
                                />
                                {/* ICON */}
                                <TouchableOpacity onPress={() => { setShowDatePicker(!showDatePicker) }}>
                                    <Icons1 name={'calendar-cursor'} style={style.inputStyles.dateEditor} size={30} color={COLORS.BLUE} />
                                </TouchableOpacity>

                                {/* SHOW DATE PICKER */}
                                {showDatePicker &&
                                    <DateTimePicker
                                        testID='appointment-date'
                                        value={evtDate}
                                        mode={'date'}
                                        dateFormat={'day month year'}
                                        onChange={changeAppointmentDate}
                                    />
                                }

                            </View>

                            {/* INPUTAREA 2 - DATE */}
                            <View style={style.inputStyles.inputArea}>

                                <TextInput
                                    editable={false}
                                    style={style.inputStyles.txt}
                                    value={evtHour ? evtHour : props?.hour}
                                />

                                {/* ICON */}
                                <TouchableOpacity onPress={() => { setShowHourPicker(!showHourPicker) }}>
                                    <Icons1 name={'clock-edit-outline'} style={style.inputStyles.dateEditor} size={30} color={COLORS.BLUE} />
                                </TouchableOpacity>

                                {/* SHOW HOUR PICKER */}
                                {showHourPicker &&
                                    <DateTimePicker
                                        testID='appointment-hour'
                                        value={new Date()}
                                        mode={'time'}
                                        onChange={changeAppointmentHour}
                                    />
                                }

                            </View>

                        </View>
                    </>
                }

                {/* ROW 6 BUTTONS */}

                {!props?.showTag &&

                    <View style={style.buttonsAppts.container}>
                        <TouchableOpacity
                            style={style.buttonsAppts.btnLight}
                            onPress={(() => {
                                changeDataPicker(); // --- When we closed, reset value
                                setShowRescheduling(!showRescheduling);
                            })}
                        >
                            <Text style={style.buttonsAppts.txtLight}>
                                {showRescheduling ? "Cancelar Alteração" : "Reagendar"}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.buttonsAppts.btnDark}
                            onPress={!showRescheduling ? cancelAppConfirm : onSubmitReschedule}
                        >
                            <Text style={style.buttonsAppts.txtDark}>
                                {!showRescheduling ? "Cancelar" : "Confirmar Alteração"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                }


            </View>
        )
    }

    function renderHeaderD() {
        return (
            <View style={style.mainContainer.gbArea}>
                <View>
                    <Text style={style.mainContainer.title}>{props?.desc}</Text>

                    <View style={style.mainContainer.underHeader}>
                        <View style={style.mainContainer.circle} />
                        <Text style={style.mainContainer.nameOwner}>C/{props?.fullData?.onwer}</Text>
                    </View>
                </View>

                <TouchableOpacity style={style.mainContainer.btn} onPress={(() => navigation.goBack())}>
                    <Icons3 color={COLORS.WHITE} size={20} name={"x"} />
                </TouchableOpacity>


            </View>
        )
    }

    return (
        <ScrollView style={style.container.fullArea}>

            {/* LOADING FRAME POP-UP */}
            <LoadingFrame
                visible={loading}
                color={COLORS.LIGHT_BLUE}
            />

            {/* MODAL POP-UP */}
            <AlertMessage
                action={modal.action}
                outClick={modal.outfunction}
                message={modal.text}
                visible={modal.visible}
                type={modal.type}
                btnTxt1={modal.btnTxt1}
                activeIcon2={modal.activeIcon2}
            />


            {/* HEADER */}
            {renderHeaderD()}

            {/* MAIN DETAILS */}
            {renderMainDetails()}

        </ScrollView>
    )
}

export default Appointments;
