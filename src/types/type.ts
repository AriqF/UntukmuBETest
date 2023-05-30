
export interface BasePokemon {
    name: string,
    url: string,
}

export interface PokemonObject {
    pokemon: BasePokemon,
    slot: number,
}