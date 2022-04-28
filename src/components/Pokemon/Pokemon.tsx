import axios from "axios";
import { useEffect, useState } from "react";

import { Section } from "./pokemonStyles";
import { changeClassOfElementsInArea, getTypeIconPath } from "../../util/commom";
import downArrow from "../../images/down-arrow.png";

import IFlavorTextEntry from "../../models/IFlavorTextEntry";
import IPokemonSpecies from "../../models/IPokemonSpecies";
import IPokemonProps from "../../models/IPokemonProps";

interface IFlavorText {
    [key: string]: boolean;
}

function Pokemon(props: IPokemonProps) {
    const [pokemonSpecies, setPokemonSpecies] = useState<IPokemonSpecies>();
    const [flavorTextEntryIndex, setFlavorTextEntryIndex] = useState<number>(0);
    const [flavorText, setFlavorText] = useState<string>("");

    function getFilteredFlavorTexts(flavorTextEntries: IFlavorTextEntry[]): IFlavorTextEntry[] {
        const seen: IFlavorText = {};
        let newFlavorTextEntries = flavorTextEntries.filter(function (entry) {
            return seen.hasOwnProperty(entry.flavor_text) || entry.language.name !== "en" ? false : (seen[entry.flavor_text] = true);
        });

        newFlavorTextEntries = newFlavorTextEntries.map((entry) => {
            const newEntry = { ...entry };
            newEntry.flavor_text = newEntry.flavor_text.replace("\f", " ").replace("POKéMON", "Pokémon");

            return newEntry;
        });

        return newFlavorTextEntries;
    }

    function getRandomFlavorText(): string {
        if (pokemonSpecies) {
            const randomIndex = Math.floor(Math.random() * pokemonSpecies.flavor_text_entries.length);

            setFlavorTextEntryIndex(randomIndex);

            return pokemonSpecies.flavor_text_entries[randomIndex].flavor_text;
        }

        return "";
    }

    function changeToNextFlavorText(): void {
        setFlavorTextEntryIndex((oldIndex) => (pokemonSpecies && oldIndex == pokemonSpecies.flavor_text_entries.length - 1 ? 0 : oldIndex + 1));
    }

    function changeToPreviousFlavorText(): void {
        setFlavorTextEntryIndex((oldIndex) => (pokemonSpecies && oldIndex === 0 ? pokemonSpecies.flavor_text_entries.length - 1 : oldIndex - 1));
    }

    function getGeneration(): string {
        const generation = pokemonSpecies && pokemonSpecies.generation.name.split("-");
        if (generation) {
            const generationText = generation[0];
            const generationNumber = generation[1];

            return generationText.concat(" ", generationNumber);
        }

        return "";
    }

    function getTypeIcons(): JSX.Element[] {
        return props.types.map((type) => {
            return <img className="type-icon" key={type.type.name} src={getTypeIconPath(type.type.name)} alt={type.type.name} />;
        });
    }

    useEffect(() => {
        function highlightCenterMostElement() {
            changeClassOfElementsInArea({
                elements: document.querySelectorAll("section"),
                markedClass: "highlight-1",
                zone: [10, 10],
            });

            changeClassOfElementsInArea({
                elements: document.querySelectorAll("section"),
                markedClass: "highlight-2",
                zone: [50, 40],
            });
        }

        window.addEventListener("scroll", highlightCenterMostElement);
    }, []);

    useEffect(() => {
        async function makeRequest(): Promise<void> {
            const result = await axios.get(props.species.url);
            const data: IPokemonSpecies = result.data;

            data.flavor_text_entries = getFilteredFlavorTexts(data.flavor_text_entries);

            setPokemonSpecies(data);
            setFlavorText(getRandomFlavorText());
        }

        makeRequest();
    }, []);

    useEffect(() => {
        if (pokemonSpecies) {
            setFlavorText(pokemonSpecies.flavor_text_entries[flavorTextEntryIndex].flavor_text);
        }
    }, [pokemonSpecies, flavorTextEntryIndex]);

    return pokemonSpecies ? (
        <Section type={props.types[0].type.name} className={`${props.isFirst ? "highlight-2" : ""}`}>
            <img className="down-arrow" src={downArrow} alt="details icon" />
            <div className="details">
                <div className="about">
                    <h3 className="generation">{getGeneration()}</h3>
                    <span className="types">{getTypeIcons()}</span>
                    <span className="bio">
                        <h3 className="id">Nº {props.id}</h3>
                        <h2 className="name">{props.name}</h2>
                    </span>
                    <span className="description">
                        <img className="down-arrow left" src={downArrow} alt="details icon" onClick={changeToPreviousFlavorText} />
                        <p className="flavor-text">{flavorText}</p>
                        <img className="down-arrow right" src={downArrow} alt="details icon" onClick={changeToNextFlavorText} />
                    </span>
                </div>
                <img className="pokemon-image" src={props.sprites.other["official-artwork"].front_default} alt={props.name} />
            </div>
        </Section>
    ) : null;
}

export default Pokemon;
