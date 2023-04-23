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
import { COLORS, GENERAL_STYLE, SIZES } from '../../utilities/route';
import { main, headerContainer, inptContainer } from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import DATE_ICON from 'react-native-vector-icons/MaterialCommunityIcons'
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

const FormAppointment = ({ navigation, route }) => {

    //------------------------------------------------
    // --- CONST'S
    //------------------------------------------------

    // --- Date Picker
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const changeAppointmentDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        console.log(currentDate)
        setShow(!show)
        setDate(currentDate);
    }


    //------------------------------------------------
    // --- FUNCTION'S
    //------------------------------------------------
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
            <ScrollView style={[GENERAL_STYLE.scrollView, inptContainer.scroll ]}>
                <View style={inptContainer.containerInput}>
                    <Text style={inptContainer.labelText}>Data atendimento</Text>

                    {/* INPUTAREA */}
                    <View style={inptContainer.inputArea}>

                        <TextInput
                            placeholder={"Senha"}
                            editable={false}
                            style={inptContainer.txt}
                            value={date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
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
                                mode={mode}
                                onChange={changeAppointmentDate}
                                dateFormat={'day month year'}
                            />
                        }
                    </View>
                </View>
            </ScrollView>
        )
    }

    return (
        <View style={GENERAL_STYLE.view}>

            {/* RENDER HEADER */}
            {renderHeader()}

            {/* RENDER FORM */}
            {renderForm()}
            {/**
             * 1 - Data (Obrigatório)
             * 2 - Hora (Obrigatório)
             * 3 - Descrição (Drop-options) (Obrigatório)
             * 4 - Animal (Drop-options) (Obrigatório)
             * 5 - Nome do Animal (Opcional)
             * 6 - Nome do DOno (Obrigatório)
             * 7 - Endereço
             * 8 - Observações
             */}
            <Text>OPA</Text>
        </View>
    )
}

export default FormAppointment;