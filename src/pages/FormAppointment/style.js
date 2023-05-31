/**
* @LuisStarlino
* Created AT: 23/04/2023 | 12:30
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../utilities/routes";

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
    headerEff: {
        borderTopLeftRadius: SIZES.RADIUS * 2,
        borderTopRightRadius: SIZES.RADIUS * 2,
        marginTop: -SIZES.MARGIN * 3,
        backgroundColor: COLORS.LIGHT_GRAY,
    },
    scroll: {
        padding: SIZES.PADDING,
        height: 200,
        color: 'black',
    },
    containerInput : {
        gap: 5,
        marginBottom: SIZES.MARGIN * 2
        
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
        fontWeight: "400",
    },
    comment: {
        flexWrap: 'wrap',
        height: 150,
        alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        // backgroundColor: 'red',
        // display: 'flex',
        // flexDirection: 'row'
    },
    labelText: {
        color: COLORS.DARK_GRAY,
        fontWeight: "500",
        fontSize: SIZES.BODY4
    },
    dropbox : {
        backgroundColor: COLORS.TRANSPARENT,
        height: 65,
        //padding: SIZES.PADDING / 2.6,
    },
    dropboxList: {
        //backgroundColor: COLORS.BLUE,
        color: COLORS.TRANSPARENT_BLACK5,
    }
})

const btn = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BLUE,
        height: 70,
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: SIZES.RADIUS,
        marginBottom: 60,
        marginTop: SIZES.MARGIN
    },
    txt: {
        fontSize: SIZES.H3,
        fontWeight: "500",
        color: COLORS.WHITE
    }
})

export {
    btn,
    main,
    inptContainer,
    headerContainer
}