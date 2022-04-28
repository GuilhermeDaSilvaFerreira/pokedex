import { useEffect, useState } from "react";
import axios from "axios";
import IPokemon from "../../models/IPokemon";
import Pokemon from "../Pokemon/Pokemon";
import { Main } from "./pokedexStyles";
import IPokemonLinks from "../../models/IPokemonLinks";
import Nullable from "../../models/NullableType";

function Pokedex() {
    const BASE_ADRESS = "https://pokeapi.co/api/v2/pokemon/";
    const [nextPokemonApiUrl, setNextPokemonApiUrl] = useState<Nullable<string>>(BASE_ADRESS);
    const [pokemon, setPokemon] = useState<IPokemon[]>([]);

    async function getAllIndividualPokemonApi(): Promise<Nullable<IPokemonLinks>> {
        if (nextPokemonApiUrl) {
            const result = await axios.get(nextPokemonApiUrl);

            return result.data;
        }

        return null;
    }

    async function getPokemon(): Promise<void> {
        const pokemonApiResult = await getAllIndividualPokemonApi();

        if (pokemonApiResult) {
            const urls = pokemonApiResult.results.map((result) => result.url);

            const results = await axios.all(urls.map((url) => axios.get(url)));

            const data: IPokemon[] = results.map((result) => {
                return result.data;
            });

            setNextPokemonApiUrl(pokemonApiResult.next);

            const newPokemon = [...pokemon, ...data];
            setPokemon(newPokemon);
        }
    }

    function loadMore() {
        if (document.scrollingElement) {
            const scrollDifference = document.scrollingElement.scrollHeight - (window.innerHeight + document.documentElement.scrollTop);

            if (scrollDifference <= 800) {
                getPokemon();
            }
        }
    }

    useEffect(() => {
        getPokemon();
    }, []);

    useEffect(() => {
        window.removeEventListener("scroll", loadMore);
        window.addEventListener("scroll", loadMore, { passive: true });

        return () => {
            window.removeEventListener("scroll", loadMore);
        };
    }, [nextPokemonApiUrl]);

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
