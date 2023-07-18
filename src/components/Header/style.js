/**
* @LuisStarlino
* Created AT: 18/07/2023 | 20:30
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../utilities/routes';

const mainStyle = StyleSheet.create({
    containerHeader: {
        //backgroundColor: 'blue',
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnBack: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        gap: 5,
        //backgroundColor: COLORS.BLUE,
        padding: SIZES.PADDING / 3,
        borderRadius: SIZES.RADIUS  / 2,
        borderColor: COLORS.BLUE,
        borderWidth: .8,
    }
})

export default {
    mainStyle
}