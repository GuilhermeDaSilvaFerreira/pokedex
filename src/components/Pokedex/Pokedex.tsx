import { useEffect, useState } from "react";
import axios from "axios";
import IPokemon from "../../models/IPokemon";
import Pokemon from "../Pokemon/Pokemon";
import { Main } from "./pokedexStyles";

function Pokedex() {
    const [pokemon, setPokemon] = useState<IPokemon[]>([]);

    useEffect(() => {
        async function makeRequest(): Promise<void> {
            const results = await axios.all([
                axios.get("https://pokeapi.co/api/v2/pokemon/25/"),
                axios.get("https://pokeapi.co/api/v2/pokemon/1/"),
                axios.get("https://pokeapi.co/api/v2/pokemon/4/"),
                axios.get("https://pokeapi.co/api/v2/pokemon/7/"),
                axios.get("https://pokeapi.co/api/v2/pokemon/8/"),
                axios.get("https://pokeapi.co/api/v2/pokemon/9/"),
                axios.get("https://pokeapi.co/api/v2/pokemon/10/"),
                axios.get("https://pokeapi.co/api/v2/pokemon/11/"),
                axios.get("https://pokeapi.co/api/v2/pokemon/12/"),
                axios.get("https://pokeapi.co/api/v2/pokemon/13/"),
                axios.get("https://pokeapi.co/api/v2/pokemon/14/"),
            ]);

            const data: IPokemon[] = results.map((result) => {
                return result.data;
            });

            setPokemon(data);
        }

        makeRequest();
    }, []);

    function getPokemonElements() {
        return pokemon.map((poke, index) => {
            return <Pokemon key={poke.id} isFirst={index === 0} {...poke} />;
        });
    }

    return (
        <Main>
            <div className="pokemon-container">{getPokemonElements()}</div>
        </Main>
    );
}

export default Pokedex;
