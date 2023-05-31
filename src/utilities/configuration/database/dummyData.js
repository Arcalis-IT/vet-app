/**
* @LuisStarlino
* Created AT: 06/04/2023 | 08:44
*/

//------------------------------------------------
// IMPORTS
//------------------------------------------------
import { IMAGES } from '../../routes';

const dummyChart = [
    { type: "Vacinação", number: 15 },
    { type: "Castração", number: 20 },
    { type: "sedação", number: 2 },
    { type: "Resgate", number: 8 },
    { type: "Rotina", number: 22 },
]

const dummyCastrations = [
    {
        id: 1,
        descriptionType: "Castração Animal",
        animalType: "PitBull José1",
        type: "Cachorro",
        animalIcon: IMAGES.iconDog,
        owner: "Luis Starlino",
        appointment: "06-04-2023 14:30:00",
        maps: { latitude: -19.86914467011768, longitude: -43.920038085002204 },
        address: "R. Queluzita, 614 - Fernão Dias, Belo Horizonte - MG, 31910-000"
    },
    {
        id: 2,
        descriptionType: "Vacina",
        animalType: "Yorkshire Aquiles",
        type: "Cachorro",
        animalIcon: IMAGES.iconDog,
        owner: "Alice Brito",
        appointment: "07-04-2023 10:00:00",
        maps: { latitude: -19.880972849717434, longitude: -43.92367921817265 },
        address: "R. Oliver, 225 - União, Belo Horizonte - MG, 31170-660"

    },
    {
        id: 3,
        descriptionType: "Castração Animal",
        animalType: "Mustang Thor",
        type: "Cavalo",
        animalIcon: IMAGES.iconHorse,
        owner: "Rogério",
        appointment: "08-04-2023 16:00:00",
        maps: { latitude: -19.873774728544863, longitude: -43.92734105948112 },
        address: "Av. Cristiano Machado, 4.000 - União, Belo Horizonte - MG, 31160-900"
    },
    {
        id: 4,
        descriptionType: "Castração Animal",
        animalType: "Persa Lisa",
        type: "Gato",
        animalIcon: IMAGES.iconCat,
        owner: "Marge Simplson",
        appointment: "10-06-2023 15:00:00",
        maps: { latitude: -19.91908443354259, longitude: -43.938607647007515 },
        address: "Praça Sete de Setembro, s/n - Centro, Belo Horizonte - MG, 30160-041"
    },
]

const DEFAULT_ANIMALS_DROP = [
    { label: 'Cachorro', value: 'cachorro' },
    { label: 'Gato', value: 'gato' }
]

const DEFAULT_DESCRIPTIONS_DROP = [
    { label: 'Vacinação', value: 'Vacinação' },
    { label: 'Castração', value: 'Castração' },
    { label: 'Sedação', value: 'Sedação' },
    { label: 'Resgate', value: 'Resgate' },
    { label: 'Rotina', value: 'Rotina' }
]

export {
    DEFAULT_DESCRIPTIONS_DROP,
    DEFAULT_ANIMALS_DROP,
    dummyCastrations,
    dummyChart
}