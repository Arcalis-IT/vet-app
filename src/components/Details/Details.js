/**
* @LuisStarlino
* Created AT: 20/07/2023 | 21:07
*/
// ref -> https://callstack.github.io/react-native-paper/docs/components/Modal
//------------------------------------------------
// IMPORTS
//------------------------------------------------
import Modal from 'react-native-modal'
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
//_______________MAIN_____________________________
export default function DetailsAp({ props }) {

    //------------------------------------------------
    // --- FUNCTION'S
    //------------------------------------------------
    function renderMainDetails() {
        return (
            <ScrollView>
                {/* DATE AND TIME */}
                <View>
                    <Text style={{ color: 'red' }}>Data</Text>
                </View>
                <View>
                    <Text>Hora</Text>
                </View>
            </ScrollView>
        )
    }

    function renderHeaderD() {
        return (
            <View style={style.mainContainer.gbArea}>
                <View>
                    <Text style={style.mainContainer.title}>Vacinação</Text>

                    <View style={style.mainContainer.underHeader}>
                        <View style={style.mainContainer.circle} />
                        <Text style={style.mainContainer.nameOwner}>C/Luis</Text>
                    </View>
                </View>

                <TouchableOpacity style={style.mainContainer.btn} onPress={props.outfunction}>
                    <Text style={{ color: COLORS.WHITE }}>Voltar</Text>
                </TouchableOpacity>


            </View>
        )
    }

    return (
        <Modal
            style={style.mainContainer.main}
            isVisible={props.visible}
            animationIn={"zoomIn"}
            animationOut={"zoomOut"}
            animationOutTiming={200}
            animationInTiming={100}
        >

            {/* HEADER */}
            {renderHeaderD()}

            <Divider bold={true} style={style.mainContainer.divider} />

            {/* MAIN DETAILS */}
            {renderMainDetails()}

        </Modal>
    )
}