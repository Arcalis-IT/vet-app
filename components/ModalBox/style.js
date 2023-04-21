/**
* @LuisStarlino
* Created AT: 02/04/2023 | 17:08
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../utilities/route";

const modalStyle = StyleSheet.create({
    main: {
        backgroundColor: COLORS.BLUE,
        borderRadius: SIZES.RADIUS * 1.5,
        padding: SIZES.PADDING,
        flex: 1,
        width: SIZES.WIDTH * .88,
    },
    division: {
        display: 'flex',
        flexDirection:'row'
    }
})

const photoBox = StyleSheet.create({
    container: {
        display:'flex',
        //backgroundColor: 'red',
        width: '35%',
        alignItems:'center',
        height: 100
    },
    circle: {
        //margin: SIZES.MARGIN,
        backgroundColor: 'white',
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: SIZES.RADIUS_CIRCLE
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: COLORS.BLUE
    }
})

const infoBox = StyleSheet.create({
    container: {
        marginTop: 4,
        gap: 5
    },
    owner: {
        color: COLORS.WHITE,
        fontWeight: "bold",
        fontSize: SIZES.BODY3
    },
    animalDetails:{
        display: 'flex',
        flexDirection: 'row',
        gap: 5 
    },
    animalDetailsText: {
        color: COLORS.WHITE_SMOKE,
        opacity: 0.8,
        fontSize: SIZES.BODY5
    },
    appointmentBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20
    },
    dateBox: {
        display: 'flex',
        gap: 5 ,
        flexDirection: 'row',
        alignItems:'center'
    }
})

const buttonSections = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15
    },
    btn: {
        marginTop: -SIZES.MARGIN,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.RADIUS / 2,
        height: 35,
        width: '40%',
        backgroundColor: COLORS.WHITE
    },
    btnTxt : {
        fontSize: SIZES.BODY4,
        color: COLORS.BLUE,
    }
})

export {
    buttonSections,
    modalStyle,
    photoBox,
    infoBox
}