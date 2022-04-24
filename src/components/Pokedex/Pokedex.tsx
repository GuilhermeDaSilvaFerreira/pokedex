import { useEffect, useState } from "react";
import axios from "axios";
import IPokemon from "../../models/IPokemon";
import Pokemon from "../Pokemon/Pokemon";
import "./pokedex.css";

function Pokedex() {
    const [pokemon, setPokemon] = useState<IPokemon[]>([]);

    useEffect(() => {
        async function makeRequest(): Promise<void> {
            const results = await axios.all([
                axios.get("https://pokeapi.co/api/v2/pokemon/1/"),
                axios.get("https://pokeapi.co/api/v2/pokemon/2/"),
                axios.get("https://pokeapi.co/api/v2/pokemon/3/"),
            ]);

            const data: IPokemon[] = results.map((result) => {
                return result.data;
            });

            setPokemon(data);
        }

        makeRequest();
    }, []);

    function getPokemonElements() {
        return pokemon.map((poke) => {
            return <Pokemon key={poke.id} {...poke} />;
        });
    }

    return (
        <main>
            <div className="pokemon-container">{getPokemonElements()}</div>
        </main>
    );
}

export default Pokedex;
