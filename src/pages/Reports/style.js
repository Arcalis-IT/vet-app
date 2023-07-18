/**
* @LuisStarlino
* Created AT: 18/06/2023 | 10:26
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../utilities/routes";

const mainContainer = StyleSheet.create({
    container: {
        //backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        padding: SIZES.PADDING,
        // paddingBottom: SIZES.PADDING * 2
    }
})

const headerReports = StyleSheet.create({
    containerHeader: {
        //backgroundColor: 'blue',
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnBack: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        gap: 5,
        //backgroundColor: COLORS.BLUE,
        padding: SIZES.PADDING / 3,
        borderRadius: SIZES.RADIUS  / 2,
        borderColor: COLORS.BLUE,
        borderWidth: .8,
    }
})

const intervalStyle = StyleSheet.create({
    container : {
        display: 'flex',
        flexDirection: 'row',
        gap: SIZES.GAP
    },
    btnAtv: {
        padding: SIZES.PADDING / 3,
        borderColor: COLORS.DARK_BLUE,
        borderRadius: SIZES.RADIUS  * 2 ,
        width: 100,
        borderWidth: 1,
        alignItems: 'center'
    },
    btn: {
        padding: SIZES.PADDING / 3,
        width: 100,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.DARK_BLUE,
        borderRadius: SIZES.RADIUS  * 2 ,
        opacity: 0.5
    },
    txt: {
        color: COLORS.DARK_BLUE,
    },
    txtAtv: {
        color: COLORS.DARK_BLUE,
        fontWeight: "700"
    }
})

const reportLineStyle = StyleSheet.create({
    container : {
        //backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        marginTop: SIZES.MARGIN * 3,
        height: 500,        
    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: SIZES.GAP / 2,
        padding: SIZES.PADDING / 2.5
    },
    line1: {
        display: "flex",
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    mainTxt : {
        color: COLORS.DARK_BLUE,
        fontWeight: "700",
        fontSize: SIZES.H1
    },
    txt : {
        color: COLORS.DARK_GRAY,
        fontWeight: "400"
    },
    iconArea: {
        borderRadius: SIZES.RADIUS_CIRCLE,
        backgroundColor: COLORS.BLUE,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9
    },
    line2: {
        display: "flex",
        flexDirection: 'row',
        alignItems:'center',
        gap: SIZES.GAP * 2
    },
    smallTxt : {
        color: COLORS.DARK_GRAY,
        fontWeight: "700",
        fontSize: SIZES.H4
    },
    porcentArea: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    porcentTxt: {
        color: COLORS.DARK_GRAY,
        fontWeight: "400",
        fontSize: SIZES.H4
    }
})

export {
    mainContainer,
    headerReports,
    intervalStyle,
    reportLineStyle,
}