/**
* @LuisStarlino
* Created AT: 03/04/2023 | 21:15
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../utilities/routes";

const background = StyleSheet.create({
    main: {
        width: SIZES.WIDTH,
        height: SIZES.HEIGHT,
        //padding: SIZES.PADDING
        //display: 'flex',
        //justifyContent: 'center',
        //alignItems: 'center'
    }
})

const imageView = StyleSheet.create({
    container:{
        //backgroundColor: 'red',
        alignItems: 'center',
        width: SIZES.WIDTH,
        justifyContent: 'center',
        padding: SIZES.PADDING
        //height: SIZES.HEIGHT * 1/3,
    },
    img: {
        resizeMode: "center",
        height: SIZES.HEIGHT * 1/3,
    }
})

const textsView = StyleSheet.create({
    container: {
        marginTop: SIZES.MARGIN * 2,
        //backgroundColor: 'red',
        padding: SIZES.PADDING,
        alignItems: 'center',
        gap: 30
    },
    bigTitle: {
        width: "80%",
        color: COLORS.WHITE,
        fontSize: SIZES.H1,
        lineHeight: 40,
        fontWeight: "600",
        textAlign: 'center'
    },
    subTitle: {
        width: "90%",
        color: COLORS.WHITE,
        fontSize: SIZES.BODY5,
        lineHeight: 22,
        fontWeight: "400",
        textAlign: 'center'
    }
})

const versionTag = StyleSheet.create({
    container: {
        marginTop: -SIZES.MARGIN,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: COLORS.WHITE,
        fontSize: SIZES.BODY5
    }
})

const btnsView = StyleSheet.create({
    container: {
        marginTop: 80,
        padding: SIZES.PADDING,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btnArea1: {
        backgroundColor: COLORS.WHITE,
        height: 70,
        width: 180,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: SIZES.RADIUS
    },
    btnArea2: {
        borderWidth: 1,
        borderColor: COLORS.WHITE,
        height: 70,
        width: 190,
        marginLeft:-10,
        justifyContent: 'center',
        alignItems: "center",
        borderTopRightRadius: SIZES.RADIUS,
        borderBottomEndRadius: SIZES.RADIUS,
        
    },
    txt: {
        fontSize: SIZES.H3,
        color: COLORS.WHITE,
        fontWeight: "600"
    }
})

export {
    background,
    versionTag,
    imageView,
    textsView,
    btnsView,
}