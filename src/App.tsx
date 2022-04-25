import { ThemeProvider } from "styled-components";

import Header from "./components/Header/Header";
import Pokedex from "./components/Pokedex/Pokedex";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
    return (
        <ThemeProvider theme={light}>
            <GlobalStyle></GlobalStyle>
            <div>
                <Header></Header>
                <Pokedex></Pokedex>
            </div>
        </ThemeProvider>
    );
}

export default App;
