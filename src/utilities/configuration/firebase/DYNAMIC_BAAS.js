/**
* @LuisStarlino
* Created AT: 18/05/2023 | 20:05
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';

/**************************************************************************************
// @LuisStarlino |  18/05/2023 | 20:05
//  --- Pegando o dropbox dos animais para preencher no formulário
/***************************************************************************************/
const getAnimalsDrop = async ({ id }) => {

    var _drop = await firebase().collection('dropboxAnimals').doc(id).get().then((querySnapshot) => {

        if(querySnapshot['_data']) {
            return querySnapshot['_data'];
        }
        return null
        
    });

    return _drop;
}

/**************************************************************************************
// @LuisStarlino |  25/05/2023 | 20:39
//  --- Pegando o dropbox dos descrições para preencher no formulário
/***************************************************************************************/
const getDescriptionsDrop = async ({ id }) => {

    var _drop = await firebase().collection('dropboxDescriptions').doc(id).get().then((querySnapshot) => {
        console.log("Dentro do BAASS")
        console.log(querySnapshot);
        if(querySnapshot['_data']) {
            return querySnapshot['_data'];
        }
        return null
        
    });

    return _drop;
}


export default {
    getAnimalsDrop,
    getDescriptionsDrop
}