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
import STORAGE_BAAS from './STORAGE_BAAS';

// --- DATE CONFIG
const currentDate = new Date();
const formattedDate = currentDate.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false, });

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

const updateUserInformation = async ({ id, updateData, userChangePhoto }) => {

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
        id: id,
        userChangePhoto: userChangePhoto,
        last_update: formattedDate,
    }

    try {
        await firebase().collection('users').doc(id).update(newData_json);

        newData_json.last_update = newData_json.last_update.toString();

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

        //------------------------------------------------
        // --- User Data
        //------------------------------------------------
        const response = firebaseQuery.docs?.map((d) => { return { ...d.data() } });

        //------------------------------------------------
        // --- User Photo
        //------------------------------------------------
        STORAGE_BAAS.getPhotoFromStorage({ userID: id });

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
                });

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

/**************************************************************************************
// @LuisStarlino |  03/05/2023  21"09
// --- Função que envia novas consultas no Firebase
/***************************************************************************************/
const addNewAppointment = async (form, userID) => {
    try {

        //------------------------------------------------
        // GET NEW ID
        //------------------------------------------------
        const countCollection = await firebase().collection('appointments').get().then((querySnapshot) => { return querySnapshot.size });

        firebase().collection('appointments').
            doc(`${countCollection + 1}_${userID}`).
            set({
                userID: userID,
                insertAT: formattedDate,
                description: form.description.value,
                date: form.datetime.value,
                hour: form.hour.value,
                onwer: form.owner_name.value,
                animal: form.animal.value,
                animal_name: form.animal_name.value,
                address: form.address.value,
                comments: form.comments.value,
            }).then(() => { return true }).catch(() => { return false });

        return true;

    } catch (e) {

        console.log("Errou ao salvar um novo appointment");
        console.log(e);

        throw "ERR IEG002 - Erro ao salvar uma nova consulta. Tente novamente mais tarde";
    }
}

/**************************************************************************************
// @LuisStarlino |  01/06/2023  18"33
// --- Função que atualiza o relatório inicial novas consultas no Firebase
/***************************************************************************************/
const addNewGeneralReport = async (id, field) => {
    const FIELDNAME = field;
    try {

        // --- GET ACTUAL VALUE
        const firebaseDB = await firebase()
            .collection('reports')
            .doc('general')
            .collection(id)
            .doc('appointments')
            .get().then((querySnapshot) => {
                var temp_reports = querySnapshot.data();
                var findAtt = false;

                for (const key in temp_reports) {
                    if (key === field) {
                        findAtt = true; // --- Ativando o trigger
                        temp_reports[key] = temp_reports[key] + 1;
                    };
                }

                if (!findAtt) temp_reports[field] = 1;
                return temp_reports;
        });


        await firebase()
            .collection('reports')
            .doc('general')
            .collection(id)
            .doc('appointments')
            .set(firebaseDB);

        return null;

    } catch (e) {
        // console.log(e);
        // throw "ERR IEG001 - Erro no servidor. Tente novamente mais tarde";
    }
}
/**************************************************************************************
// @LuisStarlino |  07/05/2023  10"03
// --- Busca as consultas no Firebase de acordo com o id
/***************************************************************************************/
const getAppointments = async (id) => {
    try {
        //------------------------------------------------
        // GET DOCS
        //------------------------------------------------
        const _appointments = await firebase().
            collection('appointments')
            .where('userID', '==', id)
            .get().then((querySnapshot) => {

                var temp_appointments = [];
                querySnapshot.forEach(documentSnapshot => {
                    temp_appointments.push(documentSnapshot.data());
                });

                return temp_appointments;
            });

        return _appointments;
    }
    catch (e) {
        console.log("Errou ao recuperar suas informações");
        console.log(e);
        throw "ERR IEG003 - Erro ao recuperar suas informações.";
    }
}

/**************************************************************************************
// @LuisStarlino |  01/06/2023  17"33
// --- Busca os relatórios gerais no Firebase de acordo com o id
/***************************************************************************************/
const getGeneralReports = async (id) => {
    try {

        //------------------------------------------------
        // GET REPORTS
        // -- PATH : reports/general/${id}/appointments
        //------------------------------------------------
        const _rep = await firebase().
            collection('reports').
            doc('general')
            .collection(id).
            doc('appointments')
            .get().then((querySnapshot) => {
                var temp_reports = querySnapshot.data();
                var response = [];

                for (const key in temp_reports) {
                    response.push({ type: key, number: temp_reports[key] })
                }

                // querySnapshot.forEach(documentSnapshot => {
                //     temp_reports.push(documentSnapshot.data());
                // });

                return response;
            });

        return _rep;

    }
    catch (e) {
        console.log("Errou ao recuperar suas informações");
        console.log(e);
        throw "ERR IEG003 - Erro ao recuperar suas informações.";
    }
}

export default {
    getUserData,
    authentication,
    getAppointments,
    getGeneralReports,
    addNewAppointment,
    addNewGeneralReport,
    updateUserInformation,
}