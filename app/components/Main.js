import { ContainerCharacters } from "./ContainerCharacters.js";
import { SearchForm } from "./SearchForm.js";

export function Main(){

    const $main = document.createElement("div");

    $main.classList.add("container-main");

    $main.appendChild(SearchForm());
    $main.appendChild(ContainerCharacters());

    return $main;

}