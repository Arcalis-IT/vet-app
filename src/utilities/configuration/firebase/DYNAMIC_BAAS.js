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
        // console.log("Dentro do BAASS")
        // console.log(querySnapshot);
        if(querySnapshot['_data']) {
            return querySnapshot['_data'];
        }
        return null
        
    });

    return _drop;
}

/**************************************************************************************
// @LuisStarlino |  07/08/2023 | 19:40
//  --- Pegando os ultimos 10 Appointments e a data do ultimo appointment entre eles
/***************************************************************************************/
const getAppointmentsDinamic = async (id) => {
    try {
        //------------------------------------------------
        // GET DOCS
        //------------------------------------------------
        const _appointments = await firebase().
            collection('appointments')
            .where('userID', '==', id)
            .orderBy("date", "desc")
            .limit(10)
            .get().then((querySnapshot) => {

                var temp_appointments = [];
                querySnapshot.forEach(documentSnapshot => {
                    temp_appointments.push(documentSnapshot.data());
                });

                return temp_appointments;
            });

        console.log("Encontrou esses");
        console.log(_appointments);
        return _appointments;
    }
    catch (e) {
        console.log("Errou ao recuperar suas informações");
        console.log(e);
        throw "ERR IEG003 - Erro ao recuperar suas informações.";
    }
}


export default {
    getAnimalsDrop,
    getDescriptionsDrop,
    getAppointmentsDinamic
}