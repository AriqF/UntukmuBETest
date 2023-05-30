import { findByName, fetchPokemon, getResult, sortPokemons } from "./services/service";
import { PokemonObject } from "./types/type";


const pokemons = await fetchPokemon(); // read json key pokemon => read {pokemon, slot} (1.1)
let somePoke: PokemonObject[] = pokemons.slice(5, 20)
console.log(sortPokemons(somePoke, "name", "DESC")) //sort by name/slot in asc/desc order (1.2)
console.log(findByName(pokemons, "pidgeotto")) //find by pokemon name and return {pokemon, slot} object


const stringList =
    `Malang, 20100101341509
Surabaya, 20090101140815
Malang, 20130905071413
Balikpapan, 20150723030802
Balikpapan, 20150722235959
Surabaya, 20150805030200
Balikpapan, 20150911120000
Malang, 20130906154022
Malang, 20160513133300
Malang, 20160102151222
Malang, 20160102143430
Malang, 20160102151501
Malang, 20160102094909
Malang, 20160102100533
Malang, 20160229221311`
console.log(getResult(stringList)); //string sort