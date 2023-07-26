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
        padding: SIZES.PADDING,
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
        marginTop: SIZES.MARGIN,
        width: '90%',
        marginLeft: '5%',
        height: 1,
        opacity: 0.5,
        backgroundColor: COLORS.DARK_BLUE
    }
})

const container = StyleSheet.create({
    fullArea: {
        width: SIZES.WIDTH,
        height: SIZES.HEIGHT
    }
})

const infos = StyleSheet.create({
    row: {
        backgroundColor: 'yellow',
        padding: SIZES.PADDING,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    detailRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        gap: 5
    }
})

export default {
    mainContainer,
    container,
    infos
}