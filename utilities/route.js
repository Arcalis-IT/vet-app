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
// --- IMAGES
//------------------------------------------------
import IMAGES from "./constants/images";

//------------------------------------------------
// --- DUMMY DATA
//------------------------------------------------
import { dummyCastrations, dummyChart } from "./configuration/database/dummyData";

//------------------------------------------------
// --- BAAS
//------------------------------------------------
import BAAS from "./configuration/firebase/BAAS";


export {
    BAAS,
    SIZES,
    COLORS,
    IMAGES,
    dummyChart,
    IMAGE_STYLE,
    GENERAL_STYLE,
    getIconByAnimal,
    dummyCastrations,
}