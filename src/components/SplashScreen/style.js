/**
* @LuisStarlino
* Created AT: 06/04/2023 | 07:39
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../utilities/routes";

const SpashContainer = StyleSheet.create({
    main: {
        //backgroundColor: COLORS.DARK_BLUE,
        width: SIZES.WIDTH,
        height: SIZES.HEIGHT,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    frameDog: {
        position: "absolute",
        top: - 100
    },
    loadingContainer: {
        marginTop: SIZES.HEIGHT * .55
    }
})

export {
    SpashContainer
}