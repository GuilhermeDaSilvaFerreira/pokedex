import Header from "./components/Header/Header";
import Pokedex from "./components/Pokedex/Pokedex";
import GlobalStyle from "./styles/styles";

function App() {
    return (
        <div>
            <GlobalStyle></GlobalStyle>
            <Header></Header>
            <Pokedex></Pokedex>
        </div>
    );
}

export default App;
