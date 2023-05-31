/**
* @LuisStarlino
* Created AT: 14/04/2023 | 20:10
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { COLORS } from '../../utilities/routes';

export default function LoadingFrame({ color, bgcolor, visible }) {

    return (
        <Modal isVisible={visible}>
            <ActivityIndicator size={100} color={color ?? COLORS.BLUE} />
        </Modal>
    )
}