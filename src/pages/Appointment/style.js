/**
* @LuisStarlino
* Created AT: 20/07/2023 | 21:24
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------

import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../utilities/routes";

const mainContainer = StyleSheet.create({
    main: {
        width: SIZES.WIDTH * 0.9,
        backgroundColor: COLORS.WHITE_SMOKE,
        borderWidth: 1,
        borderRadius: SIZES.RADIUS,
        borderColor: COLORS.BLUE,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    gbArea: {
        padding: SIZES.PADDING * 1.5,
        paddingBottom: SIZES.PADDING * .8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btn: {
        padding: SIZES.PADDING * 0.7,
        backgroundColor: COLORS.BLUE,
        borderRadius: SIZES.RADIUS * .5
    },
    title: {
        fontSize: SIZES.H1 * 0.8,
        color: COLORS.BLACK,
        fontWeight: "500"
    },
    nameOwner: {
        fontSize: SIZES.H4,
        color: COLORS.GRAY,
        fontWeight: "400"
    },
    underHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    circle: {
        backgroundColor: COLORS.BLUE,
        width: 10,
        height: 10,
        borderRadius: SIZES.RADIUS_CIRCLE
    },
    divider: {
        width: '100%',
        // marginLeft: -SIZES.PADDING * 1.5,
        height: 1,
        opacity: 1,
        backgroundColor: COLORS.DARK_BLUE
    },
    divider2: {
        width: '100%',
        // marginLeft: -SIZES.PADDING * 1.5,
        height: 1.4,
        opacity: 1,
        backgroundColor: COLORS.DARK_BLUE
    }
})

const container = StyleSheet.create({
    fullArea: {
        width: SIZES.WIDTH,
        height: SIZES.HEIGHT,
    }
})

const infos = StyleSheet.create({
    fullRow: {
        paddingLeft: SIZES.PADDING * 1.5,
        paddingTop: SIZES.PADDING * 0.5,
        paddingRight: SIZES.PADDING * 1.5,
        paddingBottom: SIZES.PADDING * 1.5,
    },
    row: {
        padding: SIZES.PADDING * 0.5,
        gap: SIZES.GAP,
        marginBottom: SIZES.MARGIN,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    descArea: {
        gap: 2
    },
    descriptionRow: {
        color: COLORS.GRAY,
        fontWeight: "700",
        fontSize: SIZES.H4
    },
    infoRow: {
        color: COLORS.BLUE,

    },
    singleRow: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: SIZES.PADDING * .8,
        paddingBottom: SIZES.PADDING * .8,
    },
    textArea: {
        marginTop: 5,
        height: 150,
        borderWidth: 1,
        borderColor: COLORS.BLUE,
        color: COLORS.DARK_BLUE,
        padding: 10,
        borderRadius: SIZES.RADIUS,
        lineHeight: 20
    }
})

const map = StyleSheet.create({
    area: {
        paddingTop: SIZES.PADDING * .8,
        borderRadius: SIZES.RADIUS,
        paddingBottom: SIZES.PADDING * .8,
    },
    mapContainerView: {
        marginTop: 1,
        height: 150
    }
})

const buttonsAppts = StyleSheet.create({
    container: {
        paddingTop: SIZES.PADDING * .8,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnLight: {
        width: '48%',
        padding: SIZES.PADDING,
        borderRadius: SIZES.RADIUS,
        borderWidth: 1,
        borderColor: COLORS.BLUE,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    txtLight: {
        color: COLORS.BLUE,
        fontWeight: "600"
    },
    txtDark: {
        color: COLORS.WHITE,
        fontWeight: "600"
    },
    btnDark: {
        borderRadius: SIZES.RADIUS,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        width: '48%',
        padding: SIZES.PADDING,
        backgroundColor: COLORS.BLUE
    }
})

const generalInfos = StyleSheet.create({
    container: {
        paddingTop: SIZES.PADDING * .8,
        paddingBottom: SIZES.PADDING * .8,
        display: "flex",
        flexDirection: 'column',
    },
    desc: {
        color: COLORS.GRAY
    },
    row: {
        marginTop: SIZES.MARGIN,
        marginBottom: SIZES.MARGIN,
        display: 'flex',
        flexDirection: 'row',
    },
})

const inputStyles = StyleSheet.create({
    container: {
        paddingTop: SIZES.PADDING * .8,
        display: "flex",
        flexDirection: 'column',
        gap: 10,
        justifyContent: 'space-between',
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
    txt: {
        color: COLORS.GRAY,
        fontWeight: "400",
    },
    dateEditor: {
        marginRight: SIZES.MARGIN
        //position: 'absolute',
        //right: '10%',
        //top: 100,
    },
})

export default {
    mainContainer,
    generalInfos,
    buttonsAppts,
    inputStyles,
    container,
    infos,
    map
}