/**
* @LuisStarlino
* Created AT: 14/05/2023 | 11:39
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { IMAGES } from '../routes';

export default function getIconByAnimal ( animal ) {
    switch(animal.toUpperCase()){
        case "CACHORRO":
            return IMAGES.iconDog
        case "GATO":
            return IMAGES.iconCat
        default:
            return IMAGES.iconHorse
    }
}