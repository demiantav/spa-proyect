import { getCharacters } from "../helpers/Api.js";
import { ContainerCharacters } from "./ContainerCharacters.js";
import { Loader } from "./Loader.js";

export function showCharacters(){

    const d = document,
          $button_form = d.querySelector(".search"),
          $form= d.querySelector(".form"),
          $input_search= d.querySelector(".search_character"),
          $fragment = d.createDocumentFragment();
          
          console.log("aca");

        d.addEventListener("submit", e => {

            if(e.target.matches("form")){
                
                e.preventDefault();
                console.log("activado");
                characters($input_search);
            }
        })


        const characters = async (name) =>{

            const $container = d.querySelector(".container-characters");

            $container.innerHTML=
            `
               <div class="jelly"></div>
       
              <svg width="0" height="0" class="jelly-maker">
             <defs>
             <filter id="uib-jelly-ooze">
             <feGaussianBlur
               in="SourceGraphic"
               stdDeviation="6.25"
               result="blur"
             />
             <feColorMatrix
               in="blur"
               mode="matrix"
               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
               result="ooze"
             />
             <feBlend in="SourceGraphic" in2="ooze" />
              </filter>
                 </defs>
           </svg>

           `
            
            const characters = await getCharacters(name.value);

            characters.data.results.forEach(character =>{

                const card = d.createElement("div");

                card.classList.add("card-container");

                card.innerHTML= 
                   `<img src="${character.thumbnail.path}.jpg" alt="${character.name}" class="marvel-img"></img>
                    <p>${character.name}</p>
                   `

                $fragment.appendChild(card);
            })

            

            $container.replaceChildren($fragment);


        }


}