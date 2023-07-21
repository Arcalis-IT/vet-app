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
        width: SIZES.WIDTH * .90,
        //backgroundColor: 'red'
    },
    btn: {
        padding: SIZES.PADDING,
        backgroundColor: COLORS.BLUE,
        borderRadius: SIZES.RADIUS * .5
    },
    title: {
        fontSize: SIZES.H1 * 0.9,
        color: COLORS.BLACK,
        fontWeight: "500"
    },
    nameOwner: {
        fontSize: SIZES.H3,
        color: COLORS.GRAY,
    },
    underHeader: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    }
})

export default {
    mainContainer
}