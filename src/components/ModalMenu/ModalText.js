/**
* @LuisStarlino
* Created AT: 25/08/2023 | 18:31
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
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS, GENERAL_STYLE } from "../../utilities/routes";

export default function MenuPopUP({ message, action, visible, outClick, type, btnTxt1 = null, activeIcon2 = false }) {


    return (
        <Modal isVisible={visible} style={main.container}
            onBackdropPress={outClick}
            animationIn={"zoomIn"}
            animationOut={"zoomOut"}
            animationOutTiming={400}
        >
            {/* PDF 1 WEEK SELECT */}
            <TouchableOpacity style={main.cardItem}>
                <Icon name="file-pdf-o" size={30} color={COLORS.BLUE}/>
                <Text style={main.textItem}>Relatório da semana selecionada</Text>
            </TouchableOpacity>

            {/* EXCEL 1 WEEK SELECT */}
            <TouchableOpacity style={[main.cardItem,{borderBottomWidth:1, borderBottomColor: COLORS.GRAY}]}>
                <Icon2 name="microsoft-excel" size={30} color={COLORS.BLUE}/>
                <Text style={main.textItem}>Relatório da semana selecionada</Text>
            </TouchableOpacity>

            {/* PDF 2 MONTHY SELECT */}
            <TouchableOpacity style={main.cardItem}>
                <Icon name="file-pdf-o" size={30} color={COLORS.BLUE}/>
                <Text style={main.textItem}>Relatório do mes selecionado</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[main.cardItem,{borderBottomWidth:1, borderBottomColor: COLORS.GRAY}]}>
                <Icon2 name="microsoft-excel" size={30} color={COLORS.BLUE}/>
                <Text style={main.textItem}>Relatório do mês selecionado</Text>
            </TouchableOpacity>

            {/* PDF 3 YEAR SELECT */}
            <TouchableOpacity style={main.cardItem}>
                <Icon name="file-pdf-o" size={30} color={COLORS.BLUE}/>
                <Text style={main.textItem}>Relatório do Ano Selecionado</Text>
            </TouchableOpacity>

                        
            
        </Modal>
    )
}