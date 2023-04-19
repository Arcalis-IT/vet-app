/**
* @LuisStarlino
* Created AT: 09/04/2023 | 21:35
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../utilities/route";

const main = StyleSheet.create({
    container: {
        marginTop: SIZES.HEIGHT/6,
        alignItems: 'center',
        borderRadius: SIZES.RADIUS,
        backgroundColor: COLORS.BLUE,
        borderWidth: 1,
        borderColor: COLORS.WHITE,
        //width: 50,
        maxHeight: SIZES.HEIGHT/2,
        gap: 20
    },
    message: {
        width: '90%',
        color: COLORS.WHITE,
        fontWeight: "400",
        alignItems:"center",
        justifyContent: 'center',
        textAlign: 'center'
    },
    btn: {
        marginTop: SIZES.MARGIN,
        justifyContent: 'center',
        alignItems: 'center',
        //padding: SIZES.PADDING,
        backgroundColor: COLORS.WHITE,
        borderRadius: SIZES.RADIUS,
        height: 60,
        width:'80%'
    },
    textBtn: {
        color: COLORS.BLUE,
        fontWeight: "600"
    }
})

export {
    main
}