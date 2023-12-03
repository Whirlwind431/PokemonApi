


async function ajaxRequest() {
     try {
          const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
          // console.log(response)
          const pokemons = await response.json()
          console.log(pokemons)
          displayEntries(pokemons)
     }
     catch (error) {
          console.log(error);
     }


}

function displayEntries(pokemons) {
     const divResponse = document.getElementById("divResponse")
     let html = "<h3>ALL Pokemons</h3>"
     html += "<ul>"
     for (const pokemon of pokemons.results) {
          html += `<li> ${pokemon.name} </li>`
     }
     html += "</ul>"
     console.log(html);

     divResponse.innerHTML = html
}



