/**
* @LuisStarlino
* Created AT: 20/04/2023 | 19:32
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../utilities/routes";

const headerStyles = StyleSheet.create({
    scroolArea: {
        padding: SIZES.PADDING,
        backgroundColor: COLORS.LIGHT_GRAY,
        marginTop: -30,
        borderTopRightRadius: SIZES.RADIUS * 2,
        borderTopLeftRadius: SIZES.RADIUS * 2,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: SIZES.PADDING,
        paddingBottom: SIZES.PADDING * 2
    },
    text: {
        color: COLORS.BLUE
    },
    btn: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        gap: 5,
        backgroundColor: COLORS.TRANSPARENT_BLACK1,
        padding: SIZES.PADDING / 3,
        borderRadius: SIZES.RADIUS / 2,
        borderColor: COLORS.WHITE,
        borderWidth: 1,
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
    },
})

const imageContainer = StyleSheet.create({
    buttonArea: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: SIZES.GAP
    },
    txt: {
        fontSize: SIZES.H3,
        color: COLORS.WHITE,
        fontWeight: "400"
    },
    txtBlue: {
        fontSize: SIZES.H3,
        color: COLORS.BLUE,
        fontWeight: "400"
    },
    btnBlue: {
        width: '46%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: SIZES.PADDING / 2,
        backgroundColor: COLORS.BLUE,
        borderRadius: SIZES.RADIUS
    },
    btnWhite: {
        width: '46%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: SIZES.PADDING / 2,
        backgroundColor: COLORS.TRANSPARENT,
        borderWidth: 1,
        borderColor: COLORS.BLUE,
        borderRadius: SIZES.RADIUS
    },
    image: {
        width: SIZES.WIDTH,
        height: 350,
        resizeMode: "contain"

    }
})



export {
    headerStyles,
    infoContainer,
    imageContainer
}