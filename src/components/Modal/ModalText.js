/**
* @LuisStarlino
* Created AT: 06/04/2023 | 8:39
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import {
    TouchableOpacity,
    Text
} from "react-native";
import Modal from 'react-native-modal';
import { main } from "./style";
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { COLORS, GENERAL_STYLE } from "../../utilities/routes";

export default function AlertMessage({ message, action, visible, outClick, type, btnTxt1 = null, activeIcon2 = false }) {


    return (
        <Modal isVisible={visible} style={main.container}
            onBackdropPress={outClick}
            animationIn={"zoomIn"}
            animationOut={"zoomOut"}
            animationOutTiming={400}
        >
            {/* ICON */}
            {type == "alert"
                 ?
                <Icon name={"alert-triangle"} color={COLORS.WHITE} size={150} />
                : 
                !activeIcon2 ? // --- Aqui eu ativo a lib2 dos ícons, exemplo na tela "Appointment.js"
                    <Icon name={type} color={COLORS.WHITE} size={150} />
                    :
                    <Icon2 name={'checkmark-done-circle-outline'} color={COLORS.WHITE} size={150} />
            }

            {/* FIXED TITLE */}
            <Text style={[GENERAL_STYLE.title, { color: COLORS.WHITE }]}>VET APP</Text>

            {/* MESSAGE */}
            <Text style={main.message}>
                {message}
            </Text>

            {/* BTN */}
            <TouchableOpacity style={main.btn} onPress={action}>
                <Text style={main.textBtn}>{btnTxt1 ? btnTxt1 : "Entendido"}</Text>
            </TouchableOpacity>
        </Modal>
    )
}