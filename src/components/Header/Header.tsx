import "./header.css";
import pokeballIcon from "../../images/pokeball-icon.svg";

function Header() {
    return (
        <header>
            <img
                className="pokeball-icon"
                src={pokeballIcon}
                alt="pokeball spinning"
            />
            <h1>Pokedex</h1>
        </header>
    );
}

export default Header;
