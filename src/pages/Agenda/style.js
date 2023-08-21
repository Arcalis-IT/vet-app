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
        position: 'relative',
        backgroundColor: COLORS.WHITE,
        borderColor: COLORS.BLUE,
        borderWidth: 1,
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

const cancelBox = StyleSheet.create({
    main: {
        backgroundColor: 'red',
        position: 'absolute',
        right: 0,
        padding: 10,
        borderBottomLeftRadius: SIZES.RADIUS,
        borderTopWidth:1,
        borderColor: COLORS.WHITE,
        borderRightWidth: 1
    },
    txt: {
        fontWeight: "700",
        color: COLORS.WHITE
    }
})

export default {
    mainBoxView,
    cancelBox
}