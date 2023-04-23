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
import { main } from './style';

const FormAppointment = ({ navigation, route }) => {

    //------------------------------------------------
    // --- FUNCTION'S
    //------------------------------------------------
    function renderHeader() {
        return(
            <View>
                <Text>Cadastre novas consultas</Text>
                <Text>preencha todo o formulário</Text>
            </View>
        )
    }

    return(
        <View style={main.container}>
            {/* RENDER HEADER */}
            {renderHeader()}
            {/* RENDER FORM */}
            <Text>OPA</Text>
        </View>
    )
}

export default FormAppointment;