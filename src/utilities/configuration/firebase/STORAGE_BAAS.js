/**
* @LuisStarlino
* Created AT: 27/05/2023 | 20:14
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '@react-native-firebase/storage';

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
            getPhotoFromStorage({ userID: userID });
            return true;
        })
        .catch((failureCb) => {
            console.log('failureCb');
            console.log(failureCb);
            return false;
        });;

    return sucessUpload;
}

/**************************************************************************************
// @LuisStarlino |  30/05/2023 | 20:35
//  --- Recebendo a foto do storage
/***************************************************************************************/
const getPhotoFromStorage = async ({ userID }) => {

    try {
        const _url = await storage().ref(`users/${userID}.jpg`).getDownloadURL();    

        if(_url) {
            // -- SAVE URL PHOTO
            AsyncStorage.setItem('@vetapp:userPhoto', JSON.stringify({url: _url}));
        }
    } catch (error) {
        console.log(error);
    }
}

export default {
    sendPhotoToStorage,
    getPhotoFromStorage
}