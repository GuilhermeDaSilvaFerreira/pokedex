import axios from "axios";
import { useEffect, useState } from "react";

import IFlavorTextEntry from "../../models/IFlavorTextEntry";
import IPokemon from "../../models/IPokemon";
import IPokemonSpecies from "../../models/IPokemonSpecies";
import { Section } from "./pokemonStyles";

function Pokemon(props: IPokemon) {
    const [pokemonSpecies, setPokemonSpecies] = useState<IPokemonSpecies>();

    function getCorrectFlavorTexts(
        flavorTextEntries: IFlavorTextEntry[]
    ): IFlavorTextEntry[] {
        let newFlavorTextEntries = [...flavorTextEntries];

        newFlavorTextEntries = newFlavorTextEntries.filter((entry) => {
            return entry.language.name === "en";
        });

        newFlavorTextEntries = newFlavorTextEntries.map((entry) => {
            const newEntry = { ...entry };
            newEntry.flavor_text = newEntry.flavor_text
                .replace("\f", " ")
                .replace("POKéMON", "Pokémon");

            return newEntry;
        });

        return newFlavorTextEntries;
    }

    useEffect(() => {
        async function makeRequest(): Promise<void> {
            const result = await axios.get(props.species.url);
            const data: IPokemonSpecies = result.data;

            data.flavor_text_entries = getCorrectFlavorTexts(
                data.flavor_text_entries
            );

            setPokemonSpecies(data);
        }

        makeRequest();
    }, []);

    function getRandomFlavorText(): string {
        if (pokemonSpecies) {
            const randomIndex = Math.floor(
                Math.random() * pokemonSpecies.flavor_text_entries.length
            );

            return pokemonSpecies.flavor_text_entries[randomIndex].flavor_text;
        }

        return "";
    }

    return pokemonSpecies ? (
        <Section>
            <div className="about">
                <h3 className="id">{props.id}</h3>
                <h2 className="name">{props.name}</h2>
                <p className="flavor-text">{getRandomFlavorText()}</p>
            </div>
            <img
                className="pokemon-image"
                src={props.sprites.other["official-artwork"].front_default}
                alt={props.name}
            />
        </Section>
    ) : null;
}

export default Pokemon;
