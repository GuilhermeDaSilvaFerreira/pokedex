import IResource from "./IResource";
import Nullable from "./NullableType";

export default interface IPokemonLinks {
    count: number;
    next: Nullable<string>;
    previous: Nullable<string>;
    results: IResource[];
}
