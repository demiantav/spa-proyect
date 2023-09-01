export function SearchForm(){

    const $container = document.createElement("div");

    $container.classList.add("container-form");

    $container.innerHTML= 
       
       `<h1 class="search-title">Buscador de personajes de Marvel</h1>
        <form action="" method="get" class="form">
          <input type="search" name="buscador" class="search_character"id="search" placeholder="Ingrese nombre del personaje" required>
          <input type="submit" value="Buscar" class="search">
        </form>
       `

    return $container;


}