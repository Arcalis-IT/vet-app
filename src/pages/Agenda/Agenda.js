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
import { GENERAL_STYLE, SIZES } from '../../utilities/routes';
import { Header } from '../../components/routes';
import { Agenda, } from 'react-native-calendars';

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
            <View style={{ height: SIZES.HEIGHT * 0.6 }}>
                <Agenda
                    style={{ height: '100%' }}
                    selected="2022-12-01"
                    items={{
                        '2022-12-01': [{ name: 'Cycling' }, { name: 'Walking' }, { name: 'Running' }],
                        '2022-12-02': [{ name: 'Writing' }]
                    }}
                    renderItem={(item, isFirst) => (
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }

    return (
        <View style={GENERAL_STYLE.communVIEW}>

            {/* HEADER */}
            <Header goBackFunc={gBack} />

            {/* TITLE */}
            <View style={{ marginTop: 30 }}>
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