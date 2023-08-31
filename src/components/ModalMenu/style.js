/**
* @LuisStarlino
* Created AT: 25/08/2023 | 18:31
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../utilities/routes";

const main = StyleSheet.create({
    container: {
        marginTop: SIZES.HEIGHT/6,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRadius: SIZES.RADIUS,
        backgroundColor: COLORS.WHITE,
        maxHeight: SIZES.HEIGHT/2.1,
    },
    cardItem: {
        display: "flex",
        width: '100%',
        alignItems:'center',
        flexDirection: 'row',
        gap: SIZES.GAP * 0.9,
        padding: SIZES.PADDING 
    },
    textItem: {
        color: COLORS.BLUE,
        fontWeight: "500",
        fontSize: SIZES.H3
    }
    
})

export {
    main
}