/**
* @LuisStarlino
* Created AT: 27/05/2023 | 20:14
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import AsyncStorage from '@react-native-async-storage/async-storage';


/**************************************************************************************
// @LuisStarlino |  18/05/2023 | 20:05
//  --- Enviado foto para o storage
/***************************************************************************************/
const sendPhotoToStorage = async ({ refPhoto, pathPhoto }) => {

    const reference = storage().ref(refPhoto);
    const pathToFile = pathPhoto;
    // uploads file
    await reference.putFile(pathToFile)
        .then((successCb) => {
            console.log('successCb');
            console.log(successCb);
        })
        .catch((failureCb) => {
            console.log('failureCb');
            console.log(failureCb);
        });;

    // var _drop = await firebase().collection('dropboxAnimals').doc(id).get().then((querySnapshot) => {

    //     if (querySnapshot['_data']) {
    //         return querySnapshot['_data'];
    //     }
    //     return null

    // });

    return null;
}

export default {
    sendPhotoToStorage
}