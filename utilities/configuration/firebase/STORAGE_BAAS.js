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
const sendPhotoToStorage = async ({ userID, pathPhoto }) => {

    const reference = storage().ref(`users/${userID}.jpg`);
    const pathToFile = pathPhoto;

    // uploads file
    const sucessUpload = await reference.putFile(pathToFile)
        .then((successCb) => {
            console.log('successCb');
            console.log(successCb);
            return true;
        })
        .catch((failureCb) => {
            console.log('failureCb');
            console.log(failureCb);
            return false;
        });;

    return sucessUpload;
}

export default {
    sendPhotoToStorage
}