/**
* @LuisStarlino
* Created AT: 20/04/2023 | 19:32
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../utilities/route";

const headerStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        //backgroundColor: 'white'
    },
    text: {
        color: COLORS.BLUE
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '10%',
        padding: 3,
    }
})

const infoContainer = StyleSheet.create({
    container: {
        marginTop: 25,
        gap: 30
    },
    card: {
        gap: 5
    },
    cardlabel: {
        color: COLORS.DARK_GRAY,
        fontWeight: "500",
        fontSize: SIZES.BODY4
    },
    inputArea: {
        borderWidth: 1,
        borderColor: COLORS.BLUE,
        borderRadius: SIZES.RADIUS / 2,
        position: 'relative'
    },
    inputTxt: {
        fontSize: SIZES.BODY5,
        color: COLORS.DARK_GRAY,
        fontWeight: "400",
        paddingLeft: 8
    },
    btnArea: {
        backgroundColor: COLORS.BLUE,
        height: 70,
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: SIZES.RADIUS,

    },
    txt: {
        fontSize: SIZES.H3,
        color: COLORS.WHITE,
        fontWeight: "600"
    }
})

export {
    headerStyles,
    infoContainer
}