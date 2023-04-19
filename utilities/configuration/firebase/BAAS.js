/**
* @LuisStarlino
* Created AT: 12/04/2023 | 20:42
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/firestore';
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
            AsyncStorage.setItem('@vetapp:user', JSON.stringify(response));

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

export default {
    authentication
}