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
        gap: 5
    },
    txt: {
        color: COLORS.WHITE,
        fontSize: SIZES.H3
    },
    information: {
        color: "#C6C6C6",
        fontSize: SIZES.H4
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
        backgroundColor: COLORS.TRANSPARENT_BLACK3,
        padding: SIZES.PADDING / 3,
        borderRadius: SIZES.RADIUS,
        borderColor: COLORS.WHITE,
        borderWidth: 1,
    },
    teste: {
        color: 'red'
    }
})

const modalEdit = StyleSheet.create({
    main: {
        backgroundColor: COLORS.WHITE,
        borderRadius: SIZES.RADIUS,
        justifyContent: 'flex-start'
    },
    container: {
        marginTop: SIZES.MARGIN * 4,
        padding: SIZES.PADDING / 2
    },
    inputArea: {
        borderWidth: 1,
        borderColor: COLORS.BLUE,
        borderRadius: SIZES.RADIUS,
        position: 'relative'
    },
    inputContainer: {
        width: '100%',
        gap: 6
    },
    textInput: {
        color: COLORS.DARK_BLUE,
        fontSize: SIZES.H3
    }
    
})

export {
    iconTopContainer,
    scrollContainer,
    imageContainer,
    cardsContainer,
    modalEdit,
    logoubtn,
    infoSec
}