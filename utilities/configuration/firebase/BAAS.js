/**
* @LuisStarlino
* Created AT: 12/04/2023 | 20:42
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/firestore';
import { getDeviceName, getModel, getSystemName, getSystemVersion } from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';


const authentication = async ({ user, pass }) => {


    try {

        // --- AUTH SERVICE
        const subscriber = await auth().signInWithEmailAndPassword(user, pass);

        // --- GET USER
        const firebaseQuery = await firebase().collection('users').where('id', "==", subscriber?.user?.uid).get();

        if (firebaseQuery) {

            const response = firebaseQuery.docs?.map((d) => { return { ...d.data() } });

            // --- Save in Async Storage | Secction
            AsyncStorage.setItem('@vetapp:user', JSON.stringify(response[0]));

            //------------------------------------------------
            // --- Analytics 
            //------------------------------------------------
            const analyticQuery = await firebase().collection('analyticsDATA').where('userID', "==", subscriber?.user?.uid).get();
            const deviceName = await getDeviceName();
            const devicePlataform = getSystemName();
            const model = getModel();
            const versionSO = getSystemVersion();
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false, });

            if (analyticQuery.docs.length == 0) { // --- Save new

                firebase().collection('analyticsDATA').
                    doc(subscriber?.user?.uid).
                    set({
                        userID: subscriber?.user?.uid,
                        count_login: 1,
                        last_login: formattedDate,
                        device_name: deviceName,
                        device_plataform: devicePlataform,
                        device_model: model,
                        device_SO_version: versionSO
                    })

            } else {

                const getData = analyticQuery.docs?.map((d) => { return { ...d.data() } });
                let temp_count = getData[0].count_login


                await firebase().collection('analyticsDATA').doc(subscriber?.user?.uid).update({
                    count_login: (temp_count + 1),
                    last_login: formattedDate,
                    device_name: deviceName,
                    device_plataform: devicePlataform,
                    device_model: model,
                    device_SO_version: versionSO
                });
            }

            // let temp_count = response[0]?.count_login;



        } else {
            console.log("Não foi possível pegar o usuário");
            throw "ERR IEG001 - Erro no servidor. Tente novamente mais tarde";
        }

        return subscriber;


    } catch (error) {

        console.log(error);
        if (error.message.includes("[auth/invalid-email]")) {
            throw "E-mail inválido. Digite um email válido para entrar no aplicativo.";
        }

        else if (error.message.includes("[auth/wrong-password]")) {
            throw "Senha inválida. Tente novamente!";
        }

        else {
            throw "ERR IEG001 - Erro no servidor. Tente novamente mais tarde";
        }

    }
}

const updateUserInformation = async ({ id, updateData }) => {

    // --- BUILD THE JSON TO SAVE AND UPDATE
    var newData_json = {
        name: updateData?.name.value,
        mail: updateData?.mail.value,
        phone: updateData?.phone.value,
        cpf: updateData?.cpf.value,
        gender: updateData?.gender.value,
        clinic_name: updateData?.clinic_name.value,
        clinic_address: updateData?.clinic_address.value,
        clinic_phone: updateData?.clinic_phone.value,
        clinic_working_time: updateData?.clinic_working_time.value,
    }

    console.log(newData_json);

    try {

        await firebase().collection('users').doc(id).update(newData_json);

        // --- Save new AsyncStorage
        AsyncStorage.setItem('@vetapp:user', JSON.stringify(newData_json));

        return true;
    } catch (e) {
        console.log(e);

        throw "ERR IEG001 - Erro no servidor. Tente novamente mais tarde";

    }
}

const getUserData = async ({ id }) => {

    // --- GET USER
    const firebaseQuery = await firebase().collection('users').where('id', "==", id).get();

    if (firebaseQuery) {

        
        const response = firebaseQuery.docs?.map((d) => { return { ...d.data() } });
        
        // --- Save in Async Storage | Secction
        AsyncStorage.setItem('@vetapp:user', JSON.stringify(response[0]));

        //------------------------------------------------
        // --- Analytics 
        //------------------------------------------------
        const analyticQuery = await firebase().collection('analyticsDATA').where('userID', "==", id).get();
        const deviceName = await getDeviceName();
        const devicePlataform = getSystemName();
        const model = getModel();
        const versionSO = getSystemVersion();
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false, });

        if (analyticQuery.docs.length == 0) { // --- Save new

            firebase().collection('analyticsDATA').
                doc(id).
                set({
                    userID: id,
                    count_login: 1,
                    last_login: formattedDate,
                    device_name: deviceName,
                    device_plataform: devicePlataform,
                    device_model: model,
                    device_SO_version: versionSO
                })

        } else {

            const getData = analyticQuery.docs?.map((d) => { return { ...d.data() } });
            let temp_count = getData[0].count_login


            await firebase().collection('analyticsDATA').doc(id).update({
                count_login: (temp_count + 1),
                last_login: formattedDate,
                device_name: deviceName,
                device_plataform: devicePlataform,
                device_model: model,
                device_SO_version: versionSO
            });
        }

        // let temp_count = response[0]?.count_login;



    } else {
        console.log("Não foi possível pegar o usuário");
        throw "ERR IEG001 - Erro no servidor. Tente novamente mais tarde";
    }

}


export default {
    getUserData,
    authentication,
    updateUserInformation
}