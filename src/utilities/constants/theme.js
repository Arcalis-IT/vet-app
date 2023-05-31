/**
* @LuisStarlino
* Created AT: 02/04/2023 | 19:46
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { Dimensions } from "react-native";

//------------------------------------------------
// CONST'S
//------------------------------------------------
const {width, height} = Dimensions.get("window");


export const COLORS = {

    // --- APP PATTERS COLORS | https://colorhunt.co/palette/37306b66347f9e4784d27685
    BLUE: "#0014FF",
    DARK_BLUE: "#000A7F",
    LIGHT_BLUE: "#00E7FF",
    BG_TESTE: "#000219",


    // --- GENERAL COLORS
    WHITE: "#FFF",
    BLACK: "#000",
    GRAY: "#777777",
    WHITE_SMOKE: '#F9F9F9',
    LIGHT_GRAY: '#F8F8F8',
    DARK_GRAY: '#757575',

    TRANSPARENT_BLACK1: 'rgba(2, 2, 2, 0.1)',
    TRANSPARENT_BLACK3: 'rgba(2, 2, 2, 0.3)',
    TRANSPARENT_BLACK5: 'rgba(2, 2, 2, 0.5)',
    TRANSPARENT_BLACK7: 'rgba(2, 2, 2, 0.7)',
    TRANSPARENT_BLACK9: 'rgba(2, 2, 2, 0.9)',

    TRANSPARENT_GRAY: 'rgba(77,77,77, 0.8)',
    TRANSPARENT_DARK_GRAY: 'rgba(20,20,20, 0.9)',

    TRANSPARENT: 'transparent',
}

export const SIZES = {

    // --- GLOBAL SIZES
    BASE: 8,
    FONT: 14,
    RADIUS: 12,
    PADDING: 24,
    MARGIN: 10,

    // --- ICONS
    PADDING_ICONS: 50,
    RADIUS_CIRCLE: 50,

    // --- FONT SIZES
    LARGE_TITLE: 40,
    H1: 30,
    H2: 20,
    H3: 16,
    H4: 14,
    BODY1: 30,
    BODY2: 22,
    BODY3: 16,
    BODY4: 14,
    BODY5: 12,
    GAP: 25,

    // --- CHART SIZES
    CHART_BOX: 250,

    // --- app dimensions
    WIDTH: width,
    HEIGHT: height
}

const appTheme = { COLORS, SIZES };

export default appTheme;