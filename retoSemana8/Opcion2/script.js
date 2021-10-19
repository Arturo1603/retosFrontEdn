//valdiar si nos podemos conectar con la api
function fetchPoke(id){
    try{
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((respuesta) => respuesta.json())
    .then((data) => {
        createPokemon(data)
    })
    }catch(error){
        console.log(error);
    }
}



//traeremos cierta cantidad de pokemones

function fetchPokes(num){
    for (let i = 1; i <= num; i++) {
        fetchPoke(i);
        
    }
}

fetchPokes(150);
// //capturo en mi variable "ObtenerPokemones" la api completa con fetch y lo transformo en un json
// const ObtenerPokemones = async () => {
//     try{
//         let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/1");
//         let pokemones = await respuesta.json();
//         return pokemones;

//     }catch(error){
//         console.log(error);
//     }
// };

let pokemones = document.querySelector('.pokemones');

function createPokemon(pokemon){
    const card = document.createElement(`div`);
    card.classList.add(`pokemon-block`);

    const spriteContainer = document.createElement(`div`);
    spriteContainer.classList.add(`img-container`);

    const sprite = document.createElement(`img`);
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const numero = document.createElement(`p`);
    numero.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const nombre = document.createElement(`p`);
    nombre.classList.add(`nombre`);
    nombre.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(numero);
    card.appendChild(nombre);

    pokemones.appendChild(card);
}
// function listarPokemones(){
//     let htmlCards = "";
//     ObtenerPokemones()
//         .then((misPokemon) => {
//             misPokemon.forEach((pokel) => {
//                 htmlCards = htmlCards + `<img src="" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${pokel.forms.name}</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             </div>`;
//             });    
//         })
//         .catch((err) => console.log(err));

//     pokemones.innerHTML = htmlCards;
// }

// listarPokemones();
