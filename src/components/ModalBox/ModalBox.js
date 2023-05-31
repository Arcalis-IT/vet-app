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
    TouchableOpacity,
    Text
} from "react-native";
import { modalStyle, photoBox, infoBox, buttonSections } from "./style";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { COLORS, getIconByAnimal } from "../../utilities/routes";
import moment from "moment";

//_______________MAIN_____________________________
const ModalBox = ({ item, onPress }) => {

    // --- Get Date from Firebase format
    const originalDate = item?.date.toDate();
    const dateAppointment = moment(originalDate).format('DD/MM/YYYY');


    return (
        <View style={[modalStyle.main]}>

            {/* Section 1 | Photo and info */}
            <View style={modalStyle.division}>
                {/* Image */}
                <View style={photoBox.container}>
                    <TouchableOpacity style={photoBox.circle}>
                        <Image
                            source={getIconByAnimal((item?.animal))}
                            style={photoBox.icon}
                        />
                    </TouchableOpacity>
                </View>

                {/* Info */}
                <View style={infoBox.container}>

                    {/* Appointment Description */}
                    <Text style={infoBox.owner}>{item?.description}</Text>

                    {/* AnimalDetails */}
                    <View style={infoBox.animalDetails}>
                        <Icon name={"paw-outline"} size={15} />
                        <Text style={infoBox.animalDetailsText}>{item?.animal_name}</Text>
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
                            <Icon2 name={"clockcircleo"} size={14} color={"white"} />
                            <Text>{item?.hour}</Text>
                        </View>

                    </View>
                </View>
            </View>
            {/* Section 2 | Buttons */}
            <View style={buttonSections.container}>

                <TouchableOpacity style={[buttonSections.btn, { borderWidth: 1, borderColor: COLORS.WHITE, backgroundColor: COLORS.BLUE }]}>
                    <Text style={[buttonSections.btnTxt, { color: COLORS.WHITE }]}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={buttonSections.btn} onPress={onPress}>
                    <Text style={buttonSections.btnTxt}>Detalhes</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ModalBox;