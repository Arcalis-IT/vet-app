/**
* @LuisStarlino
* Created AT: 02/04/2023 | 20:09
*/

//------------------------------------------------
// --- CONSTANTS
//------------------------------------------------
import { GENERAL_STYLE, IMAGE_STYLE } from "./styles/generalStyles";
import { COLORS, SIZES } from "./constants/theme";

//------------------------------------------------
// --- FUNCTION'S
//------------------------------------------------
import getIconByAnimal from "./functions/getIcon";

//------------------------------------------------
// --- IMAGES & LOTTIES
//------------------------------------------------
import IMAGES from "./constants/images";
import LOTTIES from './constants/lotties';


//------------------------------------------------
// --- DUMMY DATA
//------------------------------------------------
import { DEFAULT_DESCRIPTIONS_DROP ,DEFAULT_ANIMALS_DROP, dummyCastrations, dummyChart } from "./configuration/database/dummyData";

//------------------------------------------------
// --- AGENDA THEME
//------------------------------------------------
import { agendaTHEME } from "./constants/agendaTheme";

//------------------------------------------------
// --- BAAS
//------------------------------------------------
import BAAS from "./configuration/firebase/BAAS";
import DYNAMIC_BAAS from "./configuration/firebase/DYNAMIC_BAAS";
import STORAGE_BAAS from "./configuration/firebase/STORAGE_BAAS";


export {
    BAAS,
    SIZES,
    COLORS,
    IMAGES,
    LOTTIES,
    dummyChart,
    agendaTHEME,
    IMAGE_STYLE,
    DYNAMIC_BAAS,
    STORAGE_BAAS,
    GENERAL_STYLE,
    getIconByAnimal,
    dummyCastrations,
    DEFAULT_ANIMALS_DROP,
    DEFAULT_DESCRIPTIONS_DROP,
}