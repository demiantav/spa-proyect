/*e3d56c780c36ed0ece38b000428dd807 public key*/
/*e53eaafc41138316b2a3df78378bbf62efec1425 private key*/

import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { showCharacters } from "./components/ShowCharacters.js";

export async function App(){

    const root = document.getElementById("root");
    
    root.appendChild(Header());
    root.appendChild(Main());
    showCharacters();

    
}
