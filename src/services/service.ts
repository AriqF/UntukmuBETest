import { PokemonObject } from "../types/type";
import axios, { AxiosResponse } from "axios"


export async function fetchPokemon(): Promise<PokemonObject[]> {
    let pokemons: PokemonObject[] = [];
    await axios.get('https://pokeapi.co/api/v2/type/3').then((res: AxiosResponse) => {
        pokemons = res.data.pokemon;
    }).catch((error) => {
        console.log(error)
    })
    return pokemons;
}

export function findByName(pokemons: PokemonObject[], nameQuery: string): PokemonObject {
    return pokemons.filter((pokemon) => (pokemon.pokemon.name).toLowerCase() == nameQuery.toLowerCase())[0]
}

export function sortPokemons(pokemons: PokemonObject[], property: "slot" | "name", order: "ASC" | "DESC"): PokemonObject[] {
    return pokemons.sort(sortBy(property, order))
}

function sortBy(property: "slot" | "name", order: "ASC" | "DESC") {
    if (property === "name") {
        return function (a: PokemonObject, b: PokemonObject) {
            let result: number;
            if (order === "DESC") {
                result = (a.pokemon.name > b.pokemon.name) ? -1 : (a.pokemon.name < b.pokemon.name) ? 1 : 0;
            } else {
                result = (a.pokemon.name < b.pokemon.name) ? -1 : (a.pokemon.name > b.pokemon.name) ? 1 : 0;
            }
            return result
        }
    } else if (property === "slot") {
        return function (a: PokemonObject, b: PokemonObject) {
            let result: number;
            if (order === "DESC") {
                result = (a.slot > b.slot) ? -1 : (a.slot < b.slot) ? 1 : 0;
            } else {
                result = (a.slot < b.slot) ? -1 : (a.slot > b.slot) ? 1 : 0;
            }
            return result
        }
    }
}

//* TEST NO 2

export function getResult(str: string) {
    let splittedStr = str.split('\n');
    //create map by location name as key and store number as array in each key
    let locationMap = new Map<string, number[]>()

    //set the location map and sort number
    splittedStr.forEach((str: string) => {
        let strArr = str.split(", ");
        if (locationMap.has(strArr[0])) {
            locationMap.get(strArr[0])?.push(+strArr[1])
            locationMap.get(strArr[0])?.sort()
        } else {
            locationMap.set(strArr[0], [+strArr[1]])
        }
    })

    let resultString: string[] = []
    //loop the sorted location number to get result
    splittedStr.forEach((str: string) => {
        let strArr = str.split(", ");
        let index = locationMap.get(strArr[0])?.indexOf(+strArr[1]) || 0
        resultString.push(strArr[0] + (index + 1))
        console.log(strArr[0] + (index + 1))
    })

    return resultString;
}

