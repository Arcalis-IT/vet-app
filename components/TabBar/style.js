/**
* @LuisStarlino
* Created AT: 02/04/2023 | 20:09
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";
import { COLORS } from '../../utilities/route';

const container = StyleSheet.create({
    main: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: COLORS.WHITE,
        borderTopColor: "transparent",
        height: 60
    }
})

export default {
    container
}