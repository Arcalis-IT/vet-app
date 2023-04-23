/**
* @LuisStarlino
* Created AT: 23/04/2023 | 12:30
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../utilities/route";

const main = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE,
        height: SIZES.HEIGHT
    }
})

const headerContainer = StyleSheet.create({
    main: {
        padding: SIZES.PADDING,
        gap: -5,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.BLUE,
        paddingBottom: SIZES.PADDING * 2,
        // borderBottomLeftRadius: SIZES.RADIUS,
        // borderBottomRightRadius: SIZES.RADIUS,
    },
    title: {
        color: COLORS.WHITE
    },
    subtitle: {
        color: COLORS.WHITE,
        fontWeight: "300",
        fontSize: SIZES.BODY5,
        fontStyle: "italic"
    }
})

const inptContainer = StyleSheet.create({
    scroll: {
        borderTopLeftRadius: SIZES.RADIUS * 2,
        borderTopRightRadius: SIZES.RADIUS * 2,
        marginTop: -SIZES.MARGIN * 3,
        padding: SIZES.PADDING
    },
    containerInput : {
        gap: 5
        
    },
    inputArea: {
        position: 'relative',
        borderWidth: 1,
        borderColor: COLORS.BLUE,
        padding: SIZES.PADDING / 2.6,
        borderRadius: SIZES.RADIUS,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dateEditor: {
        marginRight: SIZES.MARGIN
        //position: 'absolute',
        //right: '10%',
        //top: 100,
    },
    txt: {
        color: COLORS.GRAY,
        fontWeight: "400"
    },
    labelText: {
        color: COLORS.DARK_GRAY,
        fontWeight: "500",
        fontSize: SIZES.BODY4
    }
})

export {
    main,
    inptContainer,
    headerContainer
}