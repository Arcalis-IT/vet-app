/**
* @LuisStarlino
* Created AT: 02/04/2023 | 20:30
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { StyleSheet } from "react-native";

const container = StyleSheet.create({
    main: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%',
    },
    underNivel: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 2,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: 'blue'
    }
    
})

export default {
    container
}