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
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import style from './style';
import { COLORS } from '../../utilities/routes';
import { Divider } from 'react-native-paper';

import DATE_ICON from 'react-native-vector-icons/MaterialCommunityIcons'
const Appointments = ({ navigation, route }) => {

    //------------------------------------------------
    // --- CONST'S
    //------------------------------------------------
    const { props } = route.params ?? null;


    //------------------------------------------------
    // --- FUNCTION'S
    //------------------------------------------------
    function renderMainDetails() {
        return (
            <ScrollView>

                {/* ROW 1 - DATE AND TIME */}
                <View style={style.infos.row}>
                    <View style={style.infos.detailRow}>
                        <TouchableOpacity>
                            <DATE_ICON name={'calendar-cursor'} size={30} color={COLORS.BLUE} />
                        </TouchableOpacity>
                        <Text style={{ color: 'red' }}>Data</Text>
                    </View>
                    <View style={style.infos.detailRow}>
                        <Text style={{ color: 'red' }}>ICON</Text>
                        <Text style={{ color: 'red' }}>Data</Text>
                    </View>
                </View>

                {/* ROW 2 - DATE AND TIME */}
                <View style={style.infos.row}>
                    <View style={style.infos.detailRow}>
                        <Text style={{ color: 'red' }}>ICON</Text>
                        <Text style={{ color: 'red' }}>Data</Text>
                    </View>
                    <View style={style.infos.detailRow}>
                        <Text style={{ color: 'red' }}>ICON</Text>
                        <Text style={{ color: 'red' }}>Data</Text>
                    </View>
                </View>
            </ScrollView>
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
                    <Text style={{ color: COLORS.WHITE }}>Voltar</Text>
                </TouchableOpacity>


            </View>
        )
    }

    return (
        <View style={style.container.fullArea}>

            {/* HEADER */}
            {renderHeaderD()}

            <Divider bold={true} style={style.mainContainer.divider} />

            {/* MAIN DETAILS */}
            {renderMainDetails()}

        </View>
    )
}

export default Appointments;