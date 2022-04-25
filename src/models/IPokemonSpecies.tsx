import NullableType from "./NullableType";
import IFlavorTextEntry from "./IFlavorTextEntry";
import IResource from "./IResource";

interface IDescription {
    description: string;
    language: IResource;
}

interface IGenus {
    genus: string;
    language: IResource;
}

interface IName {
    language: IResource;
    name: string;
}

interface IPalParkEncouter {
    area: IResource;
    base_score: number;
    rate: number;
}

interface IPokedexNumber {
    entry_number: number;
    pokedex: IResource;
}

interface IVariety {
    is_default: boolean;
    pokemon: IResource;
}

export default interface IPokemonSpecies {
    base_happiness: number;
    capture_rate: number;
    color: IResource;
    egg_groups: IResource[];
    evolution_chain: {
        url: NullableType<string>;
    };
    evolves_from_species: NullableType<string>;
    flavor_text_entries: IFlavorTextEntry[];
    form_descriptions: IDescription[];
    forms_switchable: boolean;
    gender_rate: number;
    genera: IGenus[];
    generation: IResource;
    growth_rate: IResource;
    habitat: IResource;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    names: IName[];
    order: number;
    pal_park_encounters: IPalParkEncouter[];
    pokedex_numbers: IPokedexNumber[];
    shape: IResource;
    varieties: IVariety;
}
