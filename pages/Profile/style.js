/**
* @LuisStarlino
* Created AT: 15/04/2023 | 22:16
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../utilities/route";

const scrollContainer = StyleSheet.create({
    imgBg: {
        height: SIZES.HEIGHT * .33,
        backgroundColor: 'blue'
    },
    infoContainer: {
        //backgroundColor: 'COLORS.BLUE',
        alignItems: 'center',
        padding: SIZES.PADDING,
        //height: SIZES.HEIGHT * 2.90,
        marginTop: -SIZES.HEIGHT * .03,
        borderTopLeftRadius: SIZES.RADIUS * 2,
        borderTopRightRadius: SIZES.RADIUS * 2,
    },
    img: {
        width: "100%",
        height: "120%",
        overflow: "hidden",
    }
})

const imageContainer = StyleSheet.create({
    main: {
        height: 80,
        width: 80,
        borderRadius: SIZES.RADIUS_CIRCLE,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -SIZES.HEIGHT * 0.08,
        marginBottom: SIZES.MARGIN,
        overflow: 'hidden',
        borderWidth: 4,
        borderColor: COLORS.WHITE
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

const infoSec = StyleSheet.create({
    user: {
        gap: 2,
        alignItems: 'center'
    },
    name: {
        fontSize: SIZES.H2,
        color: COLORS.BLACK
    },
    email: {
        color: COLORS.DARK_GRAY,
        fontSize: SIZES.BODY5,
        fontWeight: "600"
    },
    txt: {
        color: COLORS.BLACK,
        fontSize: SIZES.BODY5,
        
    }
})

const cardsContainer = StyleSheet.create({
    main: {
        width: '100%',
        //height: 220,
        marginBottom: SIZES.MARGIN,
        padding: SIZES.PADDING,
        borderRadius: SIZES.RADIUS
    },
    title: {
        color: COLORS.WHITE,
        marginBottom: SIZES.MARGIN * 2
    },
    itemContainer: {
        //backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 7
    },
    txt: {
        color: COLORS.WHITE,
        fontSize: SIZES.H3
    },
    input: {
        //backgroundColor: 'red',
        width: '100%',
        borderBottomWidth: 1,
        //borderWidth: 1,
        //borderRadius: SIZES.RADIUS / 3,
        borderColor: "#c6c6c6",
        padding: 7,
        //paddingLeft: 0,
        //paddingTop: 0,
        color: "#c6c6c6",
        marginBottom: 20
    },
    inputEdit: {
        //backgroundColor: 'red',
        width: '100%',
        //borderBottomWidth: 1,
        borderWidth: 1,
        borderRadius: SIZES.RADIUS / 3,
        borderColor: COLORS.LIGHT_GRAY,
        padding: 7,
        //paddingLeft: 0,
        //paddingTop: 0,
        color: COLORS.WHITE,
        marginBottom: 20
    }
})

const logoubtn = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE,
        borderWidth: 1,
        borderColor: COLORS.BLUE,
        height: 70,
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: SIZES.RADIUS,
        marginBottom: 60,
    },
    txt: {
        fontSize: SIZES.H3,
        fontWeight: "600",
        color: COLORS.BLUE
    }
})

const iconTopContainer = StyleSheet.create({
    main: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: SIZES.PADDING,
        top: 0,
        justifyContent: 'space-between'
    },
    btn: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        gap: 5,
        backgroundColor: COLORS.DARK_BLUE,
        padding: SIZES.PADDING / 2.5,
        borderRadius: SIZES.RADIUS_CIRCLE,
        //borderColor: COLORS.BLUE,
        //borderWidth: 1,
    }
})

export {
    iconTopContainer,
    scrollContainer,
    imageContainer,
    cardsContainer,
    logoubtn,
    infoSec
}