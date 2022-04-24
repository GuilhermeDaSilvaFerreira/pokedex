import "./header.css";
import pokeballIcon from "../../images/pokeball-icon.svg";

function Header() {
    return (
        <header>
            <img src={pokeballIcon} alt="pokeball" />
            <h1>Pokedex</h1>
        </header>
    );
}

export default Header;
