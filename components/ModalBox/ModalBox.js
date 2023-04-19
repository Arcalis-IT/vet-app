/**
* @LuisStarlino
* Created AT: 06/04/2023 | 8:39
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import {
    View,
    Image,
    Touchable,
    TouchableOpacity,
    Text
} from "react-native";
import { modalStyle, photoBox, infoBox, buttonSections } from "./style";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { COLORS } from "../../utilities/route";

//_______________MAIN_____________________________
const ModalBox = ({ item, onPress }) => {

    // --- Get Date and time
    const dateAppointment = item?.appointment.split(" ")[0].replaceAll('-', '/');
    const hourAppointment = item?.appointment.split(" ")[1].substring(0,5);


    return (
        <View style={[modalStyle.main]} key={item?.id}>
            {/* Section 1 | Photo and info */}
            <View style={modalStyle.division}>
                {/* Image */}
                <View style={photoBox.container}>
                    <TouchableOpacity style={photoBox.circle}>
                        <Image
                            source={item?.animalIcon}
                            style={photoBox.icon}
                        />
                    </TouchableOpacity>
                </View>

                {/* Info */}
                <View style={infoBox.container}>

                    {/* onwerName */}
                    <Text style={infoBox.owner}>{item?.owner}</Text>

                    {/* AnimalDetails */}
                    <View style={infoBox.animalDetails}>
                        <Icon name={"paw-outline"} size={15} />
                        <Text style={infoBox.animalDetailsText}>{item?.animalType}</Text>
                    </View>

                    {/* appointment */}
                    <View style={infoBox.appointmentBox}>

                        {/* Date */}
                        <View style={infoBox.dateBox}>
                            <Icon name={"calendar"} size={15} color={"white"} />
                            <Text>{dateAppointment}</Text>
                        </View>

                        {/* Hour */}
                        <View style={infoBox.dateBox}>
                            <Icon2 name={"clockcircleo"} size={14} color={"white"}/>
                            <Text>{hourAppointment}</Text>
                        </View>

                    </View>
                </View>
            </View>
            {/* Section 2 | Buttons */}
            <View style={buttonSections.container}>

                <TouchableOpacity style={[buttonSections.btn,{borderWidth:1, borderColor: COLORS.WHITE, backgroundColor: COLORS.BLUE }]}>
                    <Text style={[buttonSections.btnTxt,{ color: COLORS.WHITE }]}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={buttonSections.btn} onPress={onPress}>
                    <Text style={buttonSections.btnTxt}>Detalhes</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ModalBox;