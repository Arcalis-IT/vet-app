/**
* @LuisStarlino
* Created AT: 18/06/2023 | 10:26
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../utilities/routes";

const mainBoxView = StyleSheet.create({
    main: {
        position: 'relative',
        backgroundColor: COLORS.WHITE,
        borderColor: COLORS.BLUE,
        borderWidth: 1,
        flex: 1,
        display:'flex',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
        marginBottom: 5,
        elevation: 5,
        shadowColor: COLORS.DARK_BLUE,
    },
    line: {
        padding: 5
    },
    txt: {
        color: COLORS.BLACK,
        fontSize: SIZES.H4
    },
    txtName: {
        color: COLORS.BLUE,
        fontSize: SIZES.H4 - 2,
    }
})

const headerStyle = StyleSheet.create({
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
    },
    popMenu: {
        display: 'flex',
        flexDirection: 'row',
        gap: SIZES.GAP * .3,
        alignItems: 'center',
    }
})

const cancelBox = StyleSheet.create({
    main: {
        backgroundColor: 'red',
        position: 'absolute',
        right: 0,
        padding: 10,
        borderBottomLeftRadius: SIZES.RADIUS,
        borderTopWidth:1,
        borderColor: COLORS.WHITE,
        borderRightWidth: 1
    },
    txt: {
        fontWeight: "700",
        color: COLORS.WHITE
    }
})

export default {
    mainBoxView,
    headerStyle,
    cancelBox
}