import { StyledHeader } from "./headerStyles";
import pokeballIcon from "../../images/pokeball-icon.svg";

function Header() {
    return (
        <StyledHeader>
            <img
                className="pokeball-icon"
                src={pokeballIcon}
                alt="pokeball spinning"
            />
            <h1>Pokédex</h1>
        </StyledHeader>
    );
}

export default Header;
