const $pokemonList = document.getElementById('pokemon-container')

async function fetchData(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150')
    const json = await response.json()
    displayPokemon(json.results)
}

fetchData()

function displayPokemon(pokemons) {
    const htmlTemplate = [];
  
    for (const poke of pokemons) {
      const pokemonId = poke.url.split('/').slice(-2, -1)[0]; // Extract the Pokemon ID from the URL
      const pokemonSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
      const pokemonName = poke.name.charAt(0).toUpperCase() + poke.name.slice(1); // Capitalize the first letter of the Pokemon name
  
      htmlTemplate.push(`
        <div class="pokemon-card">
          <div class="image-container">
            <a href="pokemon-page.html"><img src="${pokemonSpriteUrl}"></a>
          </div>
          <div class="info-container">
            <h6>#${pokemonId.padStart(3, '0')}</h6>
            <a href="pokemon-page.html"><h2>${pokemonName}</h2></a>
            <h6 class="type-1">Grass</h6>
            <h6 class="type-2">Poison</h6>
          </div>
        </div>
      `);
    }
  
    $pokemonList.innerHTML = htmlTemplate.join('');
  }

const userLocalStorage = []

$pokemonList.addEventListener('click', function(e){
    if(e.target.dataset.user) {
        userLocalStorage.push({name: e.target.dataset.user})
        localStorage.setItem('users', JSON.stringify(userLocalStorage))
    }
})



// Switch button to catch pokemon

const $catchMode = document.getElementById('flexSwitchCheckDefault')
$catchMode.addEventListener('change', function(){
    console.log(e)
})

