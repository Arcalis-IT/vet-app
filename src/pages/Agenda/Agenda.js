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
import { COLORS, GENERAL_STYLE, SIZES } from '../../utilities/routes';
import { Header } from '../../components/routes';
import { Agenda, LocaleConfig } from 'react-native-calendars';

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
    // --- FUNCTION'S
    //------------------------------------------------
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
                    // selected="2022-12-01"
                    selected={`${new Date().toDateString()}`}
                    theme={{
                        selectedDayBackgroundColor: COLORS.BLUE,
                        agendaTodayColor: COLORS.BLUE,
                        agendaKnobColor: COLORS.BLUE,
                        todayTextColor: COLORS.BLUE,
                        todayDotColor: COLORS.BLUE,
                        dotColor: COLORS.BLUE
                        // backgroundColor: '#ffffff',
                        // calendarBackground: '#ffffff',
                        // selectedDayTextColor: '#ffffff',
                        // textDisabledColor: '#d9e'
                    }}                

                    items={{
                        '2023-07-19': [{ name: 'Cycling' }, { name: 'Walking' }, { name: 'Running' }, { name: 'Running' }, { name: 'Running' }],
                        '2023-07-20': [{ name: 'Writing' }]
                    }}
                    renderItem={(item, isFirst) => (
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>{item.name}</Text>
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

            {/* HEADER */}
            <Header goBackFunc={gBack} />

            {/* TITLE */}
            <View style={{ marginTop: 30, marginBottom: 30 }}>
                <Text style={GENERAL_STYLE.title}>Sua agenda</Text>
            </View>

            {/* CALENDAR / AGENDA */}
            {renderAgenda()}
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