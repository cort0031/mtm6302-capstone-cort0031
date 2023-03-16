const pokemonInfo = [
    {sprite:'<img src="pokedex/sprites-only/0001 sp.png">', number: '#001', pokemonName:'Bulbasaur', type1:'Grass', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0002 sp.png">', number: '#002', pokemonName:'Ivysaur', type1:'Grass', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0003 sp.png">', number: '#003', pokemonName:'Venusaur', type1:'Grass', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0004 sp.png">', number: '#004', pokemonName:'Charmander', type1:'Fire', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0005 sp.png">', number: '#005', pokemonName:'Charmeleon', type1:'Fire', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0006 sp.png">', number: '#006', pokemonName:'Charizard', type1:'Fire', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0007 sp.png">', number: '#007', pokemonName:'Squirtle', type1:'Water', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0008 sp.png">', number: '#008', pokemonName:'Wartortle', type1:'Water', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0009 sp.png">', number: '#009', pokemonName:'Blastoise', type1:'Water', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0010 sp.png">', number: '#010', pokemonName:'Caterpie', type1:'Bug', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0011 sp.png">', number: '#011', pokemonName:'Metapod', type1:'Bug', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0012 sp.png">', number: '#012', pokemonName:'Butterfree', type1:'Bug', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0013 sp.png">', number: '#013', pokemonName:'Weedle', type1:'Bug', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0014 sp.png">', number: '#014', pokemonName:'Kakuna', type1:'Bug', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0015 sp.png">', number: '#015', pokemonName:'Beedrill', type1:'Bug', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0016 sp.png">', number: '#016', pokemonName:'Pidgey', type1:'Normal', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0017 sp.png">', number: '#017', pokemonName:'Pidgeotto', type1:'Normal', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0018 sp.png">', number: '#018', pokemonName:'Pidgeot', type1:'Normal', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0019 sp.png">', number: '#019', pokemonName:'Rattata', type1:'Normal', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0020 sp.png">', number: '#020', pokemonName:'Raticate', type1:'Normal', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0021 sp.png">', number: '#021', pokemonName:'Spearow', type1:'Normal', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0022 sp.png">', number: '#022', pokemonName:'Fearow', type1:'Normal', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0023 sp.png">', number: '#023', pokemonName:'Ekans', type1:'Poison', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0024 sp.png">', number: '#024', pokemonName:'Arbok', type1:'Poison', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0025 sp.png">', number: '#025', pokemonName:'Pikachu', type1:'Electric', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0026 sp.png">', number: '#026', pokemonName:'Raichu', type1:'Electric', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0027 sp.png">', number: '#027', pokemonName:'Sandshrew', type1:'Ground', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0028 sp.png">', number: '#028', pokemonName:'Sandslash', type1:'Ground', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0029 sp.png">', number: '#029', pokemonName:'Nidoran', type1:'Poison', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0030 sp.png">', number: '#030', pokemonName:'Nidorina', type1:'Poison', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0031 sp.png">', number: '#031', pokemonName:'Nidoqueen', type1:'Poison', type2:'Ground'},
    {sprite:'<img src="pokedex/sprites-only/0032 sp.png">', number: '#032', pokemonName:'Nidoran', type1:'Poison', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0033 sp.png">', number: '#033', pokemonName:'Nidorino', type1:'Poison', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0034 sp.png">', number: '#034', pokemonName:'Nidoking', type1:'Poison', type2:'Ground'},
    {sprite:'<img src="pokedex/sprites-only/0035 sp.png">', number: '#035', pokemonName:'Clefairy', type1:'Normal', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0036 sp.png">', number: '#036', pokemonName:'Clefable', type1:'Normal', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0037 sp.png">', number: '#037', pokemonName:'Vulpix', type1:'Fire', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0038 sp.png">', number: '#038', pokemonName:'Ninetales', type1:'Fire', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0039 sp.png">', number: '#039', pokemonName:'Jigglypuff', type1:'Normal', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0040 sp.png">', number: '#040', pokemonName:'Wigglytuff', type1:'Normal', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0041 sp.png">', number: '#041', pokemonName:'Zubat', type1:'Poison', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0042 sp.png">', number: '#042', pokemonName:'Golbat', type1:'Poison', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0043 sp.png">', number: '#043', pokemonName:'Oddish', type1:'Grass', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0044 sp.png">', number: '#044', pokemonName:'Gloom', type1:'Grass', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0045 sp.png">', number: '#045', pokemonName:'Vileplume', type1:'Grass', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0046 sp.png">', number: '#046', pokemonName:'Paras', type1:'Grass', type2:'Bug'},
    {sprite:'<img src="pokedex/sprites-only/0047 sp.png">', number: '#047', pokemonName:'Parasect', type1:'Grass', type2:'Bug'},
    {sprite:'<img src="pokedex/sprites-only/0048 sp.png">', number: '#048', pokemonName:'Venonat', type1:'Grass', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0049 sp.png">', number: '#049', pokemonName:'Venomoth', type1:'Grass', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0050 sp.png">', number: '#050', pokemonName:'Diglett', type1:'Ground', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0051 sp.png">', number: '#051', pokemonName:'Dugtrio', type1:'Ground', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0052 sp.png">', number: '#052', pokemonName:'Meowth', type1:'Normal', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0053 sp.png">', number: '#053', pokemonName:'Persian', type1:'Normal', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0054 sp.png">', number: '#054', pokemonName:'Psyduck', type1:'Water', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0055 sp.png">', number: '#055', pokemonName:'Golduck', type1:'Water', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0056 sp.png">', number: '#056', pokemonName:'Mankey', type1:'Fighting', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0057 sp.png">', number: '#057', pokemonName:'Primape', type1:'Fighting', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0058 sp.png">', number: '#058', pokemonName:'Growlithe', type1:'Fire', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0059 sp.png">', number: '#059', pokemonName:'Arcanine', type1:'Fire', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0060 sp.png">', number: '#060', pokemonName:'Poliwag', type1:'Water', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0061 sp.png">', number: '#061', pokemonName:'Poliwhirl', type1:'Water', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0062 sp.png">', number: '#062', pokemonName:'Poliwrath', type1:'Water', type2:'Fighting'},
    {sprite:'<img src="pokedex/sprites-only/0063 sp.png">', number: '#063', pokemonName:'Abra', type1:'Psychic', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0064 sp.png">', number: '#064', pokemonName:'Kadabra', type1:'Psychic', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0065 sp.png">', number: '#065', pokemonName:'Alakazam', type1:'Psychic', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0066 sp.png">', number: '#066', pokemonName:'Machop', type1:'Fighting', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0067 sp.png">', number: '#067', pokemonName:'Machoke', type1:'Fighting', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0068 sp.png">', number: '#068', pokemonName:'Machamp', type1:'Fighting', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0069 sp.png">', number: '#069', pokemonName:'Bellsprout', type1:'Grass', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0070 sp.png">', number: '#070', pokemonName:'Weepinbell', type1:'Grass', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0071 sp.png">', number: '#071', pokemonName:'Victreebel', type1:'Grass', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0072 sp.png">', number: '#072', pokemonName:'Tentacool', type1:'Water', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0073 sp.png">', number: '#073', pokemonName:'Tentacruel', type1:'Water', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0074 sp.png">', number: '#074', pokemonName:'Geodude', type1:'Ground', type2:'Rock'},
    {sprite:'<img src="pokedex/sprites-only/0075 sp.png">', number: '#075', pokemonName:'Graveler', type1:'Ground', type2:'Rock'},
    {sprite:'<img src="pokedex/sprites-only/0076 sp.png">', number: '#076', pokemonName:'Golem', type1:'Ground', type2:'Rock'},
    {sprite:'<img src="pokedex/sprites-only/0077 sp.png">', number: '#077', pokemonName:'Ponyta', type1:'Fire', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0078 sp.png">', number: '#078', pokemonName:'Rapidash', type1:'Fire', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0079 sp.png">', number: '#079', pokemonName:'Slowpoke', type1:'Water', type2:'Psychic'},
    {sprite:'<img src="pokedex/sprites-only/0080 sp.png">', number: '#080', pokemonName:'Slowbro', type1:'Water', type2:'Psychic'},
    {sprite:'<img src="pokedex/sprites-only/0081 sp.png">', number: '#081', pokemonName:'Magnemite', type1:'Electric', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0082 sp.png">', number: '#082', pokemonName:'Magneton', type1:'Electric', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0083 sp.png">', number: '#083', pokemonName:'Farfetchd', type1:'Normal', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0084 sp.png">', number: '#084', pokemonName:'Doduo', type1:'Normal', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0085 sp.png">', number: '#085', pokemonName:'Dodrio', type1:'Normal', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0086 sp.png">', number: '#086', pokemonName:'Seel', type1:'Water', type2:'Ice'},
    {sprite:'<img src="pokedex/sprites-only/0087 sp.png">', number: '#087', pokemonName:'Dewgong', type1:'Water', type2:'Ice'},
    {sprite:'<img src="pokedex/sprites-only/0088 sp.png">', number: '#088', pokemonName:'Grimer', type1:'Poison', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0089 sp.png">', number: '#089', pokemonName:'Muk', type1:'Poison', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0090 sp.png">', number: '#090', pokemonName:'Shellder', type1:'Water', type2:'Ice'},
    {sprite:'<img src="pokedex/sprites-only/0091 sp.png">', number: '#091', pokemonName:'Cloyster', type1:'Water', type2:'Ice'},
    {sprite:'<img src="pokedex/sprites-only/0092 sp.png">', number: '#092', pokemonName:'Gastly', type1:'Ghost', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0093 sp.png">', number: '#093', pokemonName:'Haunter', type1:'Ghost', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0094 sp.png">', number: '#094', pokemonName:'Gengar', type1:'Ghost', type2:'Poison'},
    {sprite:'<img src="pokedex/sprites-only/0095 sp.png">', number: '#095', pokemonName:'Onix', type1:'Ground', type2:'Rock'},
    {sprite:'<img src="pokedex/sprites-only/0096 sp.png">', number: '#096', pokemonName:'Drowzee', type1:'Psychic', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0097 sp.png">', number: '#097', pokemonName:'Hypno', type1:'Psychic', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0098 sp.png">', number: '#098', pokemonName:'Krabby', type1:'Water', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0099 sp.png">', number: '#099', pokemonName:'Kingler', type1:'Water', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0100 sp.png">', number: '#100', pokemonName:'Voltorb', type1:'Electric', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0101 sp.png">', number: '#101', pokemonName:'Electrode', type1:'Electric', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0102 sp.png">', number: '#102', pokemonName:'Exeggcute', type1:'Grass', type2:'Psychic'},
    {sprite:'<img src="pokedex/sprites-only/0103 sp.png">', number: '#103', pokemonName:'Exeggutor', type1:'Grass', type2:'Psychic'},
    {sprite:'<img src="pokedex/sprites-only/0104 sp.png">', number: '#104', pokemonName:'Cubone', type1:'Ground', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0105 sp.png">', number: '#105', pokemonName:'Marowak', type1:'Ground', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0106 sp.png">', number: '#106', pokemonName:'Hitmonlee', type1:'Fighting', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0107 sp.png">', number: '#107', pokemonName:'Hitmonchan', type1:'Fighting', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0108 sp.png">', number: '#108', pokemonName:'Lickitung', type1:'Normal', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0109 sp.png">', number: '#109', pokemonName:'Koffing', type1:'Poison', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0110 sp.png">', number: '#110', pokemonName:'Weezing', type1:'Poison', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0111 sp.png">', number: '#111', pokemonName:'Rhyhorn', type1:'Ground', type2:'Rock'},
    {sprite:'<img src="pokedex/sprites-only/0112 sp.png">', number: '#112', pokemonName:'Rhydon', type1:'Ground', type2:'Rock'},
    {sprite:'<img src="pokedex/sprites-only/0113 sp.png">', number: '#113', pokemonName:'Chansey', type1:'Normal', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0114 sp.png">', number: '#114', pokemonName:'Tangela', type1:'Grass', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0115 sp.png">', number: '#115', pokemonName:'Kangaskhan', type1:'Normal', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0116 sp.png">', number: '#116', pokemonName:'Horsea', type1:'Water', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0117 sp.png">', number: '#117', pokemonName:'Seadra', type1:'Water', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0118 sp.png">', number: '#118', pokemonName:'Goldeen', type1:'Water', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0119 sp.png">', number: '#119', pokemonName:'Seaking', type1:'Water', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0120 sp.png">', number: '#120', pokemonName:'Staryu', type1:'Water', type2:'Psychic'},
    {sprite:'<img src="pokedex/sprites-only/0121 sp.png">', number: '#121', pokemonName:'Starmie', type1:'Water', type2:'Psychic'},
    {sprite:'<img src="pokedex/sprites-only/0122 sp.png">', number: '#122', pokemonName:'Mr.mime', type1:'Psychic', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0123 sp.png">', number: '#123', pokemonName:'Scyther', type1:'Bug', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0124 sp.png">', number: '#124', pokemonName:'Jynx', type1:'Ice', type2:'Psychic'},
    {sprite:'<img src="pokedex/sprites-only/0125 sp.png">', number: '#125', pokemonName:'Electabuzz', type1:'Electric', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0126 sp.png">', number: '#126', pokemonName:'Magmar', type1:'Fire', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0127 sp.png">', number: '#127', pokemonName:'Pinsir', type1:'Bug', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0128 sp.png">', number: '#128', pokemonName:'Tauros', type1:'Normal', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0129 sp.png">', number: '#129', pokemonName:'Magikarp', type1:'Water', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0130 sp.png">', number: '#130', pokemonName:'Gyarados', type1:'Water', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0131 sp.png">', number: '#131', pokemonName:'Lapras', type1:'Water', type2:'Ice'},
    {sprite:'<img src="pokedex/sprites-only/0132 sp.png">', number: '#132', pokemonName:'Ditto', type1:'Normal', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0133 sp.png">', number: '#133', pokemonName:'Eevee', type1:'Normal', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0134 sp.png">', number: '#134', pokemonName:'Vaporeon', type1:'Water', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0135 sp.png">', number: '#135', pokemonName:'Jolteon', type1:'Electric', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0136 sp.png">', number: '#136', pokemonName:'Flareon', type1:'Fire', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0137 sp.png">', number: '#137', pokemonName:'Porygon', type1:'Normal', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0138 sp.png">', number: '#138', pokemonName:'Omanyte', type1:'Water', type2:'Rock'},
    {sprite:'<img src="pokedex/sprites-only/0139 sp.png">', number: '#139', pokemonName:'Omastar', type1:'Water', type2:'Rock'},
    {sprite:'<img src="pokedex/sprites-only/0140 sp.png">', number: '#140', pokemonName:'Kabuto', type1:'Water', type2:'Rock'},
    {sprite:'<img src="pokedex/sprites-only/0141 sp.png">', number: '#141', pokemonName:'Kabutops', type1:'Water', type2:'Rock'},
    {sprite:'<img src="pokedex/sprites-only/0142 sp.png">', number: '#142', pokemonName:'Aerodactyl', type1:'Rock', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0143 sp.png">', number: '#143', pokemonName:'Snorlax', type1:'Normal', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0144 sp.png">', number: '#144', pokemonName:'Articuno', type1:'Ice', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0145 sp.png">', number: '#145', pokemonName:'Zapdos', type1:'Electric', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0146 sp.png">', number: '#146', pokemonName:'Moltres', type1:'Fire', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0147 sp.png">', number: '#147', pokemonName:'Dratini', type1:'Dragon', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0148 sp.png">', number: '#148', pokemonName:'Dragonair', type1:'Dragon', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0149 sp.png">', number: '#149', pokemonName:'Dragonite', type1:'Dragon', type2:'Flying'},
    {sprite:'<img src="pokedex/sprites-only/0150 sp.png">', number: '#150', pokemonName:'Mewtwo', type1:'Psychic', type2:''},
    {sprite:'<img src="pokedex/sprites-only/0151 sp.png">', number: '#151', pokemonName:'Mew', type1:'Psychic', type2:''},
]

// const htmlTemplate = []
// const $list = document.getElementById('pokemon-container')

// for (const pokemon of pokemonInfo) {
//     htmlTemplate.push(
//         `
//         <div id="pokemon-container">
//             <div class="image-container">
//                 <a href="pokemon-page.html">${pokemon.sprite}</a>
//             </div>
//             <div class="info-container">
//                 <h6>${pokemon.number}</h6>
//                 <a href="pokemon-page.html"><h2>${pokemon.pokemonName}</h2></a>
//                 <h6 class="type-1">${pokemon.type1}</h6>
//                 <h6 class="type-2">${pokemon.type2}</h6>
//             </div>
//         </div>
//     `
//     )
// }

// $list.innerHTML = htmlTemplate.join('')

const htmlTemplate = []
const $list = document.getElementById('pokemon-container')

for (const pokemon of pokemonInfo) {
    htmlTemplate.push(
        `
        <div id="pokemon-container">
            <div class="pokemon-card">
                <div class="image-container">
                    <a href="pokemon-page.html">${pokemon.sprite}</a>
                </div>
                <div class="info-container">
                    <h6>${pokemon.number}</h6>
                    <a href="pokemon-page.html"><h2>${pokemon.pokemonName}</h2></a>
                    <h6 class="type-1">${pokemon.type1}</h6>
                    <h6 class="type-2">${pokemon.type2}</h6>
                </div>
            </div>
        </div>
    `
    )
}

$list.innerHTML = htmlTemplate.join('')