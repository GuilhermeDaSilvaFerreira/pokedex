import axios from "axios";
import { useEffect, useState } from "react";
import IFlavorTextEntry from "../../models/IFlavorTextEntry";
import IPokemon from "../../models/IPokemon";
import IPokemonSpecies from "../../models/IPokemonSpecies";

function Pokemon(props: IPokemon) {
    const [pokemonSpecies, setPokemonSpecies] = useState<IPokemonSpecies>();

    function correctFlavorTexts(flavorTextEntries: IFlavorTextEntry[]): void {
        flavorTextEntries.forEach((entry) => {
            entry.flavor_text = entry.flavor_text
                .replace("\f", " ")
                .replace("POKéMON", "POKÉMON");
        });
    }

    useEffect(() => {
        async function makeRequest(): Promise<void> {
            const result = await axios.get(props.species.url);
            const data: IPokemonSpecies = result.data;

            correctFlavorTexts(data.flavor_text_entries);

            setPokemonSpecies(data);
        }

        makeRequest();
    }, []);

    return pokemonSpecies ? (
        <section className="pokemon">
            <div className="about">
                <h3>{props.id}</h3>
                <h2>{props.name}</h2>
            </div>
            <img src={props.sprites.front_default} alt={props.name} />
            <p>{pokemonSpecies.flavor_text_entries[0].flavor_text}</p>
        </section>
    ) : null;
}

export default Pokemon;
