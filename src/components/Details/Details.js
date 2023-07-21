/**
* @LuisStarlino
* Created AT: 20/07/2023 | 21:07
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
import Modal from 'react-native-modal';
import style from './style';
//_______________MAIN_____________________________
const Details = ({ item, onPress, show }) => {

    function renderHeaderD() {
        return (
            <View style={style.mainContainer.gbArea}>

                <View>
                    <Text style={style.mainContainer.title}>Vacinação</Text>

                    <View style={style.mainContainer.underHeader}>
                        <Text>Circle</Text>
                        <Text style={style.mainContainer.nameOwner}>C/Luis</Text>
                    </View>
                </View>

                <TouchableOpacity style={style.mainContainer.btn}>
                    <Text>Voltar</Text>
                </TouchableOpacity>


            </View>
        )
    }

    return (
        <Modal style={style.mainContainer.main} isVisible={show} animationIn={"fadeIn"} animationInTiming={1} animationOutTiming={1}>

            {/* HEADER */}
            {renderHeaderD()}

        </Modal>
    )
}

export default Details