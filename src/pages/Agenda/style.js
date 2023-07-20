/**
* @LuisStarlino
* Created AT: 18/06/2023 | 10:26
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../utilities/routes";

const mainBoxView = StyleSheet.create({
    main: {
        backgroundColor: COLORS.WHITE,
        flex: 1,
        display:'flex',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
        marginBottom: 5,
        elevation: 5,
        shadowColor: COLORS.DARK_BLUE,
    },
    line: {
        padding: 5
    },
    txt: {
        color: COLORS.BLACK,
        fontSize: SIZES.H4
    },
    txtName: {
        color: COLORS.BLUE,
        fontSize: SIZES.H4 - 2,
    }
})

export default {
    mainBoxView
}