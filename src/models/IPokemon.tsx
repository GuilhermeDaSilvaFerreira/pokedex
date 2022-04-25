import NullableType from "./NullableType";
import IResource from "./IResource";

interface IAbility {
    is_hidden: boolean;
    slot: number;
    ability: IResource;
}

interface IGameIndices {
    game_index: number;
    version: IResource;
}

interface IVersionDetails {
    rarity: number;
    version: IResource;
}

interface IHeldItems {
    item: IResource;
    version_details: IVersionDetails[];
}

interface IVersionDetails {
    level_learned_at: number;
    version_group: IResource;
    move_learn_method: IResource;
}

interface IMoves {
    move: IResource;
    version_group_details: IVersionDetails[];
}

interface IDreamworldSprite {
    front_default: string;
    front_female: NullableType<string>;
}

interface IHomeSprite {
    front_default: string;
    front_female: NullableType<string>;
    front_shiny: NullableType<string>;
    front_shiny_female: NullableType<string>;
}

interface IOfficialArtworkSprite {
    front_default: string;
}

interface IOtherSprite {
    dream_world: IDreamworldSprite;
    home: IHomeSprite;
    "official-artwork": IOfficialArtworkSprite;
}

interface ISprites {
    back_default: string;
    back_female: NullableType<string>;
    back_shiny: NullableType<string>;
    back_shiny_female: NullableType<string>;
    front_default: string;
    front_female: NullableType<string>;
    front_shiny: NullableType<string>;
    front_shiny_female: NullableType<string>;
    other: IOtherSprite;
    versions: any;
}

interface IStats {
    base_stat: number;
    effort: number;
    stat: IResource;
}

interface ITypes {
    slot: number;
    type: IResource;
}

interface IPastTypes {
    generation: IResource;
    types: ITypes[];
}

export default interface IPokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: IAbility[];
    forms: IResource[];
    game_indices: IGameIndices[];
    held_items: IHeldItems[];
    location_area_encounters: NullableType<string>;
    moves: IMoves[];
    species: IResource;
    sprites: ISprites;
    stats: IStats[];
    types: ITypes[];
    past_types: IPastTypes[];
}
