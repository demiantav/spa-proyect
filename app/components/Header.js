export function Header(){

    const $header = document.createElement("header");

    $header.classList.add("container-nav");

    $header.innerHTML= `

      <div>
        <img src="app/assets/Marvel_Logo.svg" alt="logo" class="logo-marvel"></img>
      </div>

    `

    return $header;
}