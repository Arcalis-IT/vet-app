/**
* @LuisStarlino
* Created AT: 02/04/2023 | 02:53
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../routes';

export const GENERAL_STYLE = StyleSheet.create({
    scrollView: {
        //padding: SIZES.PADDING,
        backgroundColor: COLORS.LIGHT_GRAY,
        color: 'black',
        height: '100%'
    },
    view: {
        backgroundColor: COLORS.LIGHT_GRAY,
        //height: '100%'
    },
    title: {
        color: COLORS.DARK_GRAY,
        fontSize: SIZES.H2,
        fontWeight: 'bold',
        marginBottom: SIZES.MARGIN
    },
    subtitle: {
        color: COLORS.DARK_GRAY,
        fontSize: SIZES.H4,
        marginBottom: SIZES.MARGIN
    },
    barSpace: {
        marginBottom:  60
    },
    communVIEW: {
        display: 'flex',
        flexDirection: 'column',
        padding: SIZES.PADDING
    }
})

export const IMAGE_STYLE = StyleSheet.create({
    imageIcon: {
        width: 60,
        height: 60,
        borderRadius: SIZES.RADIUS_CIRCLE
    }
})

const generalStyle = {GENERAL_STYLE, IMAGE_STYLE};

export default generalStyle;