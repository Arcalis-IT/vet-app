/**
* @LuisStarlino
* Created AT: 23/04/2023 | 12:30
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
import { COLORS, GENERAL_STYLE, SIZES } from '../../utilities/route';
import { btn, headerContainer, inptContainer } from './style';
import AlertMessage from '../../components/Modal/ModalText';
import LoadingFrame from '../../components/LoadingFrame/LoadingFrame';
import DateTimePicker from '@react-native-community/datetimepicker';
import DATE_ICON from 'react-native-vector-icons/MaterialCommunityIcons'
import { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import LinearGradient from 'react-native-linear-gradient';
import { BAAS } from '../../utilities/route';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormAppointment = ({ navigation, route }) => {

    //------------------------------------------------
    // --- CONST'S
    //------------------------------------------------
    useEffect(() => {
        changeDataPicker();
        changeHourPicker();
    }, [])

    // --- Date & time Picker
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [show, setShow] = useState(false);
    const [showHour, setShowHour] = useState(false);
    const [changeHour, setChangeHour] = useState(0);

    // --- Drop values
    const [openDrop, setOpenDrop] = useState(false);
    const [valueDrop, setValueDrop] = useState(null);
    const [itemsDrop, setItemsDrop] = useState([
        { label: 'Vacinação', value: 'Vacinação' },
        { label: 'Castração', value: 'Castração' },
        { label: 'Sedação', value: 'Sedação' },
        { label: 'Resgate', value: 'Resgate' },
        { label: 'Rotina', value: 'Rotina' }
    ]);

    const [openDropAnimals, setOpenDropAnimals] = useState(false);
    const [valueDropAnimals, setValueDropAnimals] = useState(null);
    const [itemsDropAnimals, setItemsDropAnimals] = useState([
        { label: 'Cachorro', value: 'cachorro' },
        { label: 'Gato', value: 'gato' }
    ]);

    // --- Modal Alert Config
    const [modal, setModal] = useState({ visible: false, text: '', action: out, type: 'alert', outfunction: out });
    const [loading, setLoading] = useState(false);

    const out = () => {
        setModal({ visible: false });
    };


    //------------------------------------------------
    // --- LISTENER ATTRS
    //------------------------------------------------
    useEffect(() => {
        if (valueDrop) {
            onHandleChange('description', valueDrop)
        }
    }, [valueDrop])

    useEffect(() => {
        if (valueDropAnimals) {
            onHandleChange('animal', valueDropAnimals)
        }
    }, [valueDropAnimals])


    //------------------------------------------------
    // --- FORM CONFIG
    //------------------------------------------------
    function changeDataPicker() {
        setDate(new Date());
        onHandleChange('datetime', '11/01')
    }

    function changeHourPicker() {

        // --- GET TIME
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

        setHour(new Date());
        onHandleChange('hour', formattedTime);
    };


    const changeAppointmentDate = (event, selectedDate) => {
        const currentDate = selectedDate;

        setShow(!show)
        setDate(currentDate);

        // --- Set form
        onHandleChange('datetime', currentDate);
    }

    const changeAppointmentHour = (event, selectedHour) => {


        setShowHour(!showHour);
        setHour(selectedHour);

        // --- Set form
        const date = new Date(selectedHour);
        const timeString = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }).format(date);
        onHandleChange('hour', timeString);
        setChangeHour(changeHour + 1);

    }

    const [form, setForm] = useState({
        datetime: {
            attr: 'datetime',
            value: ''
        },
        hour: {
            attr: 'hour',
            value: ''
        },
        animal_name: {
            attr: 'animal_name',
            value: ''
        },
        owner_name: {
            attr: 'owner_name',
            value: ''
        },
        address: {
            attr: 'address',
            value: ''
        },
        comments: {
            attr: 'comments',
            value: ''
        },
        description: {
            attr: 'description',
            value: ''
        },
        animal: {
            attr: 'animal',
            value: ''
        }
    })

    const onHandleChange = (key, val) => {
        if (key === form[key].attr) {
            setForm({
                ...form,
                [key]: {
                    ...form[key],
                    value: val
                }
            })
        }
    }

    /**************************************************************************************
    // @LuisStarlino |  03/05/2023  20"25
    //  --- Função que envia novas consultas
    /***************************************************************************************/
    const onSubmit = async () => {

        const missingAtts = checkInputs();

        //------------------------------------------------
        // TRATAMENTO DE ERROS
        //------------------------------------------------
        if (missingAtts.length > 0 && missingAtts.length == 6) {
            setModal({
                visible: true,
                text: "Todos os campos são obrigatórios",
                action: out,
                type: 'alert',
                outfunction: out
            })
            return;
        }
        if (missingAtts.length > 0 && missingAtts.length != 1) {
            setModal({
                visible: true,
                text: `Os campos : ${missingAtts.toString().replace(",", ", ")} são obrigatórios para o envio de novas consultas`,
                action: out,
                type: 'alert',
                outfunction: out
            })
            return;
        }

        if (missingAtts.length == 1) {
            setModal({
                visible: true,
                text: `O campo ${missingAtts.toString().replace(" ", " ")} é obrigatório para o envio de novas consultas`,
                action: out,
                type: 'alert',
                outfunction: out
            })
            return;
        }

        //------------------------------------------------
        // SEND DATA
        //------------------------------------------------
        try {
            setLoading(true);
            const value = await AsyncStorage.getItem('@vetapp:user')

            if (value !== null) {
                let _json = JSON.parse(value);
                const insert = await BAAS.addNewAppointment(form, _json?.id);
                if (insert == true) {
                    setLoading(false);
                    setModal({
                        visible: true,
                        text: `Consulta inserida com sucesso.\nVolte para a tela inicial para visualizar`,
                        action: (() => { navigation.replace('Tab') }),
                        type: 'check-circle',
                        outfunction: null
                    });
                } else {
                    setModal({
                        visible: true,
                        text: "ERR IEG002 - Erro ao salvar uma nova consulta. Tente novamente mais tarde",
                        action: out,
                        type: 'alert',
                        outfunction: out
                    });
                }


            } else {
                setLoading(false);
                setModal({
                    visible: true,
                    text: "ERR IEG002 - Erro ao salvar uma nova consulta. Tente novamente mais tarde",
                    action: out,
                    type: 'alert',
                    outfunction: out
                });
            }


        } catch (error) {
            console.log("esse é o erro --> " + e);
            setLoading(false);
            setModal({
                visible: true,
                text: e,
                action: out,
                type: 'alert',
                outfunction: out
            });
        }
    }

    /**************************************************************************************
    // @LuisStarlino |  03/05/2023  20"25
    //  --- Verificando se os parâns obrigatórios foram preenchidos
    /***************************************************************************************/
    function checkInputs() {
        var missing = [];

        // --- DATA
        if (form.datetime.value == '') missing.push("Data atendimento");

        // --- HORA
        if (changeHour == 0) missing.push(" Hora atendimento");

        // --- DESCRIÇÃO
        if (!valueDrop) missing.push("Descrição");

        // --- ANIMAL
        if (!valueDropAnimals) missing.push(" Animal");

        // --- DONO
        if (form.owner_name.value == '') missing.push(" Dono(a) do Animal");

        // --- ENDEREÇO
        if (form.address.value == '') missing.push(" Endereço");

        return missing;

    }

    function renderHeader() {
        return (
            <LinearGradient
                colors={[COLORS.BG_TESTE, COLORS.BLUE]}
                start={{ x: 0.9, y: 0.9 }}
                end={{ x: 0.5, y: 0 }}
                style={headerContainer.main}
            >
                <Text style={[GENERAL_STYLE.title, headerContainer.title]}>Cadastre novas consultas</Text>
                <Text style={[GENERAL_STYLE.subtitle, headerContainer.subtitle]}>Preencha todo o formulário</Text>
            </LinearGradient>
        )
    }

    function renderForm() {
        return (

            <View style={inptContainer.scroll}>

                {/*
                 * 1 - [OK] Data (Obrigatório) 
                 * 2 - [OK] Hora (Obrigatório)
                 * 3 - [OK] Descrição (Drop-options) (Obrigatório)
                 * 4 - [OK] Animal (Drop-options) (Obrigatório)
                 * 5 - [OK] Nome do Animal (Opcional)
                 * 6 - [OK] Nome do Dono (Obrigatório)
                 * 7 - Endereço
                 * 8 - Observações
                 */}

                {/* INPUTAREA 1 - DATE */}
                <View style={inptContainer.containerInput}>
                    <Text style={inptContainer.labelText}>Data atendimento * </Text>

                    <View style={inptContainer.inputArea}>

                        <TextInput
                            editable={false}
                            style={inptContainer.txt}
                            value={form.datetime.value ? form.datetime.value.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }) : new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                        //onChangeText={value => changeDataPicker(false, value)}
                        />

                        {/* ICON */}
                        <TouchableOpacity onPress={() => { setShow(!show) }}>
                            <DATE_ICON name={'calendar-cursor'} style={inptContainer.dateEditor} size={30} color={COLORS.BLUE} />
                        </TouchableOpacity>

                        {/* SHOW DATE PICKER */}
                        {show &&
                            <DateTimePicker
                                testID='appointment-date'
                                value={date}
                                mode={'date'}
                                onChange={changeAppointmentDate}
                                dateFormat={'day month year'}
                            />
                        }
                    </View>
                </View>

                {/* INPUTAREA 2 - HOUR */}
                <View style={inptContainer.containerInput}>
                    <Text style={inptContainer.labelText}>Hora atendimento *</Text>

                    <View style={inptContainer.inputArea}>

                        <TextInput
                            editable={false}
                            style={inptContainer.txt}
                            value={form.hour.value ? form.hour.value : ""}
                        />

                        {/* ICON */}
                        <TouchableOpacity onPress={() => { setShowHour(!showHour) }}>
                            <DATE_ICON name={'clock-edit-outline'} style={inptContainer.dateEditor} size={30} color={COLORS.BLUE} />
                        </TouchableOpacity>

                        {/* SHOW HOUR PICKER */}
                        {showHour &&
                            <DateTimePicker
                                testID='appointment-hour'
                                value={hour}
                                mode={'time'}
                                onChange={changeAppointmentHour}
                            />
                        }
                    </View>
                </View>

                {/* INPUTAREA 3 - DESCRIPTION */}
                <View style={inptContainer.containerInput}>
                    <Text style={inptContainer.labelText}>Descrição *</Text>

                    <DropDownPicker
                        style={[inptContainer.inputArea, inptContainer.dropbox]}
                        containerStyle={inptContainer.dropbox}
                        textStyle={[inptContainer.labelText, { fontWeight: 'normal', paddingLeft: SIZES.PADDING / 4, paddingRight: SIZES.PADDING / 4 }]}
                        open={openDrop}
                        value={valueDrop}
                        placeholder={"Selecione"}
                        items={itemsDrop}
                        setOpen={setOpenDrop}
                        setValue={setValueDrop}
                        setItems={setItemsDrop}
                        maxHeight={2300}
                    />
                </View>

                {/* INPUTAREA 4 - ANIMAL TYPE */}
                <View style={inptContainer.containerInput}>
                    <Text style={inptContainer.labelText}>Animal *</Text>

                    <DropDownPicker
                        style={[inptContainer.inputArea, inptContainer.dropbox]}
                        containerStyle={inptContainer.dropbox}
                        textStyle={[inptContainer.labelText, { fontWeight: 'normal', paddingLeft: SIZES.PADDING / 4, paddingRight: SIZES.PADDING / 4 }]}
                        open={openDropAnimals}
                        value={valueDropAnimals}
                        placeholder={"Selecione"}
                        items={itemsDropAnimals}
                        setOpen={setOpenDropAnimals}
                        setValue={setValueDropAnimals}
                        setItems={setItemsDropAnimals}
                        maxHeight={2300}
                    />
                </View>

                {/* INPUTAREA 5 - ANIMAL NAME */}
                <View style={inptContainer.containerInput}>
                    <Text style={inptContainer.labelText}>Nome do Animal (Opcional)</Text>

                    <View style={inptContainer.inputArea}>

                        <TextInput

                            style={[inptContainer.txt, { width: '100%' }]}
                            value={form.animal_name.value}
                            onChangeText={value => onHandleChange('animal_name', value)}
                        />

                    </View>
                </View>

                {/* INPUTAREA 6 - OWNER NAME */}
                <View style={inptContainer.containerInput}>
                    <Text style={inptContainer.labelText}>Dono(a) do Animal *</Text>

                    <View style={inptContainer.inputArea}>

                        <TextInput

                            style={[inptContainer.txt, { width: '100%' }]}
                            value={form.owner_name.value}
                            onChangeText={value => onHandleChange('owner_name', value)}
                        />

                    </View>
                </View>

                {/* INPUTAREA 7 - ADRESS */}
                <View style={inptContainer.containerInput}>
                    <Text style={inptContainer.labelText}>Endereço * </Text>

                    <View style={inptContainer.inputArea}>

                        <TextInput

                            style={[inptContainer.txt, { width: '100%' }]}
                            value={form.address.value}
                            onChangeText={value => onHandleChange('address', value)}
                        />

                    </View>
                </View>

                {/* INPUTAREA 8 - COMMENTS */}
                <View style={inptContainer.containerInput}>
                    <Text style={inptContainer.labelText}>Observações </Text>

                    <View style={[inptContainer.inputArea, inptContainer.comment]}>

                        <TextInput
                            multiline={true}
                            style={[inptContainer.txt]}
                            value={form.comments.value}
                            onChangeText={value => onHandleChange('comments', value)}
                        />

                    </View>
                </View>

                {/* SUBMIT BTN */}
                <TouchableOpacity style={btn.container} onPress={onSubmit}>
                    <Text style={btn.txt}>Cadastrar nova consulta</Text>
                </TouchableOpacity>

            </View>
        )
    }

    return (
        <View style={GENERAL_STYLE.view}>

            {/* MODAL POP-UP */}
            <AlertMessage
                action={modal.action}
                outClick={modal.outfunction}
                message={modal.text}
                visible={modal.visible}
                type={modal.type}
            />

            {/* LOADING FRAME POP-UP */}
            <LoadingFrame
                visible={loading}
                color={COLORS.LIGHT_BLUE}
            />

            {/* RENDER HEADER */}
            {renderHeader()}

            {/* RENDER FORM */}
            <ScrollView style={inptContainer.headerEff}>
                {renderForm()}

                <Text style={{ marginBottom: 4, marginTop: 1090, color: 'red' }}>OPA</Text>
            </ScrollView>

        </View>
    )
}

export default FormAppointment;