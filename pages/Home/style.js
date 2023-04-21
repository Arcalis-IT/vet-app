/**
* @LuisStarlino
* Created AT: 03/04/2023 | 21:15
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../utilities/route";

const grettingsBoxStyle = StyleSheet.create({
    container: {
        padding: SIZES.PADDING,
        height: 200,
        backgroundColor: COLORS.BLUE,
        gap: 2,
    },
    imageBox: {
        marginTop: SIZES.MARGIN,
        //marginBottom: SIZES.MARGIN
    },
    doctorName: {
        color: COLORS.WHITE,
        fontWeight: "bold",
        fontSize: SIZES.H1 * .6,
    },
    subtitle: {
        color: COLORS.WHITE_SMOKE,
        opacity: 0.8,
        fontStyle: 'italic',
        fontSize: SIZES.BODY4
    }
});

const mainBox = StyleSheet.create({
    container: {
        marginTop: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: SIZES.PADDING,
    }
})

const dotBox = StyleSheet.create({
    container: {
        marginTop: SIZES.MARGIN,
        display: 'flex',
        flexDirection: 'row',
        gap: SIZES.BASE * 2,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

const modalBox = StyleSheet.create({
    container: {
        height: SIZES.HEIGHT * .75,
        width: SIZES.WIDTH * 0.8,
        backgroundColor: COLORS.BLUE,
        borderRadius: SIZES.RADIUS,
        padding: SIZES.PADDING,
        alignItems: 'center',
        gap: 15
    },
    title: {
        color: COLORS.WHITE,
        fontWeight: "600",
        fontSize: SIZES.BODY2
    },
    detailsBox: {
        display: 'flex',
        //backgroundColor: 'red',
        width: '100%'
    },
    line: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    },
    lineTitle: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    typeName: {
        fontWeight: "bold",
        color: COLORS.WHITE
    },
    dataName: {
        color: COLORS.WHITE,
        width: '80%'
    },
    mapBtn: {
        marginTop: SIZES.MARGIN,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: COLORS.WHITE,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        height: 40,
        borderRadius: SIZES.RADIUS,
    },
    mapTxt: {
        fontWeight: '500',
        color: COLORS.BLUE
    }
})

const chartBox = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: .5,
        borderRadius: SIZES.RADIUS,
        borderColor: COLORS.BLUE
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: 'red',
        marginTop: SIZES.MARGIN,
        alignItems: 'center',
        height: 40
    },
    callTxt: {
        color: COLORS.BLUE,
        fontWeight: 'bold',
        opacity: 0.8
    },
    btn : {

        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'blue',
        
        alignItems:'center',
        justifyContent: 'center',
        height: 35,
        paddingLeft: SIZES.PADDING / 2,
        paddingRight: SIZES.PADDING / 2,
        // padding: SIZES.PADDING / 2,
        borderRadius: SIZES.RADIUS / 2,
        gap: 10
    },
    btnText: {
        color: COLORS.WHITE,
        fontSize: SIZES.BODY4
    }
})

export {
    grettingsBoxStyle,
    modalBox,
    chartBox,
    mainBox,
    dotBox
}