let array


async function ajaxRequestAll() {
     try {
          const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
          // console.log(response)
          const pokemons = await response.json()
          console.log(pokemons)
          displayPokemons(pokemons)
     }
     catch (error) {
          console.log(error);
     }


}

function displayPokemons(pokemons) {
     const divResponse = document.getElementById("divResponse")
     let html = "<h3>ALL Pokemons</h3>"
     html += "<ul>"
     for (const pokemon of pokemons.results) {
          html += `<li> ${pokemon.name} </li>`
     }
     html += "</ul>"

     divResponse.innerHTML = html
}



async function ajaxRequest() {
     const searchPokemon = document.getElementById("searchPokemon").value
     try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
          console.log(response)
          const pokemon = await response.json()
          console.log(pokemon)
          displayPokemon(pokemon)
     }
     catch (error) {
          console.log(error);
     }


}



function displayPokemon(pokemon) {
     const divResponse = document.getElementById("divResponse")
     let html = `<h3>${pokemon.name}</h3>`
     html += `<div>`
     html += `<img src="${pokemon.sprites.other[`official-artwork`].front_default}">`
     html += `</div>`
     html += `<div>`
     html += `<p>Type:`
     for (type of pokemon.types) {
          html += `${type.type.name},`
     }
     html += `</p>`
     html += `<p>Abilities:`
     for (ability of pokemon.abilities) {
          html += `${ability.ability.name},`
     }

     html += `</p>`
     console.log(pokemon.moves.name);
     array = pokemon.moves.map((move) => {
          return move.move.name
     })
     console.log(array);
     html += `<p>Moves:${array.join()}</p>`
     html += "</div>"

     divResponse.innerHTML = html
}

