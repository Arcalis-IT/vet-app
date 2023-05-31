/**
* @LuisStarlino
* Created AT: 09/04/2023 | 19:22
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../utilities/routes";

const mainContainer = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BG_TESTE,
        width: SIZES.WIDTH,
        height: SIZES.HEIGHT
    }
})

const iconContainer = StyleSheet.create({
    main: {
        padding: SIZES.PADDING
    }
})

const textContainer = StyleSheet.create({
    container: {
        padding: SIZES.PADDING,
        //backgroundColor: 'red'
    },
    mainText: {
        color: COLORS.WHITE,
        fontSize: SIZES.H1 * .8,
        lineHeight: 40,
        fontWeight: "700",
    },
    simpleText: {
        color: COLORS.WHITE,
        fontSize: SIZES.H2,
        lineHeight: 30,
        fontWeight: "300",
    }
})

const inputsContainer = StyleSheet.create({
    container: {
        marginTop: SIZES.MARGIN * 5,
        padding: SIZES.PADDING,
        gap: SIZES.GAP
    },
    inputArea: {
        borderWidth: 1,
        borderColor: COLORS.WHITE,
        padding: SIZES.PADDING / 2.6,
        borderRadius: SIZES.RADIUS,
        position: 'relative'
    },
    showPass: {
        position: 'absolute',
        end:20,
        top: '45%'
    }
})

const btnContainer = StyleSheet.create({
    container: {
        marginTop: 200,
        padding: SIZES.PADDING,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnArea1: {
        backgroundColor: COLORS.WHITE,
        height: 70,
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: SIZES.RADIUS
    },
    txt: {
        fontSize: SIZES.H3,
        fontWeight: "600"
    },
    textArea: {
        marginTop: SIZES.MARGIN / 1.5,
        display: 'flex',
        flexDirection: 'row',
        gap: SIZES.GAP / 3
    },
    textStyle: {
        color: COLORS.WHITE,
        fontWeight: "300"
    }
})

export {
    textContainer,
    mainContainer,
    iconContainer,
    inputsContainer,
    btnContainer
}