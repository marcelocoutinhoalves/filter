import React, { useState, createContext } from "react"

export const PokemonContext = createContext({})

const PokemonProvider = (props) => {
    const [pokemonsList, setPokemonsList] = useState([
        {
            name: 'Bulbasaur',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
            number: '001',
            type: 'Grass'
        },
        {
            name: 'Ivysaur',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
            number: '002',
            type: 'Grass'
        },
        {
            name: 'Venusaur',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
            number: '003',
            type: 'Grass'
        },
        {
            name: 'Charmander',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
            number: '004',
            type: 'Fire'
        },
        {
            name: 'Charmeleon',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
            number: '005',
            type: 'Fire'
        },
        {
            name: 'Charizard',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
            number: '006',
            type: 'Fire'
        },
        {
            name: 'Squitle',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
            number: '007',
            type: 'Water'
        },
        {
            name: 'Wartortle',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
            number: '008',
            type: 'Water'
        },
        {
            name: 'Blastoise',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
            number: '009',
            type: 'Water'
        },
        {
            name: 'Caterpie',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
            number: '010',
            type: 'Bug'
        },
        {
            name: 'Metapod',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
            number: '011',
            type: 'Bug'
        },
        {
            name: 'Butterfree',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
            number: '012',
            type: 'Bug'
        },
        {
            name: 'Weedle',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
            number: '013',
            type: 'Bug'
        },
        {
            name: 'Kakuna',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
            number: '014',
            type: 'Bug'
        },
        {
            name: 'Beedrill',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
            number: '015',
            type: 'Bug'
        },
        {
            name: 'Pikachu',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
            number: '025',
            type: 'Electric'
        },
        {
            name: 'Raichu',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png',
            number: '026',
            type: 'Electric'
        },
        {
            name: 'Vulpix',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
            number: '037',
            type: 'Fire'
        },
        {
            name: 'Ninetales',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png',
            number: '038',
            type: 'Fire'
        },
        {
            name: 'Oddish',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png',
            number: '043',
            type: 'Grass'
        },
        {
            name: 'Gloom',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png',
            number: '044',
            type: 'Grass'
        },
        {
            name: 'Vileplume',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png',
            number: '045',
            type: 'Grass'
        },
        {
            name: 'Paras',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png',
            number: '046',
            type: 'Bug'
        },
        {
            name: 'Parasect',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png',
            number: '047',
            type: 'Bug'
        },
        {
            name: 'Psyduck',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
            number: '054',
            type: 'Water'
        },
        {
            name: 'Golduck',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png',
            number: '055',
            type: 'Water'
        },
        {
            name: 'Growlithe',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
            number: '058',
            type: 'Fire'
        },
        {
            name: 'Arcanine',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png',
            number: '059',
            type: 'Fire'
        },
        {
            name: 'Poliwag',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png',
            number: '060',
            type: 'Water'
        },
        {
            name: 'Poliwhirl',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png',
            number: '061',
            type: 'Water'
        },
        {
            name: 'Poliwrath',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png',
            number: '062',
            type: 'Water'
        },
        {
            name: 'Bellsprout',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png',
            number:'069',
            type: 'Grass'
        },
        {
            name: 'Weepinbell',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png',
            number: '070',
            type: 'Grass'
        },
        {
            name: 'Victreebel',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png',
            number: '071',
            type: 'Grass'
        },
        {
            name: 'Magnemite',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png',
            number: '081',
            type: 'Electric'
        },
        {
            name: 'Magneton',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png',
            number: '082',
            type: 'Electric'
        },
        {
            name: 'Gastly',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png',
            number: '092',
            type: 'Ghost'
        },
        {
            name: 'Haunter',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png',
            number: '093',
            type: 'Ghost'
        },
        {
            name: 'Gengar',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png',
            number: '094',
            type: 'Ghost'
        },
        {
            name: 'Electabuzz',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png',
            number: '125',
            type: 'Electric'
        },
        {
            name: 'Jolteon',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png',
            number: '135',
            type: 'Electric'
        },
        {
            name: 'Zapdos',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png',
            number: '145',
            type: 'Electric'
        },
        {
            name: 'Moltres',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png',
            number: '146',
            type: 'Fire'
        },
        {
            name: 'Pichu',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png',
            number: '172',
            type: 'Electric'
        },
        {
            name: 'Misdreavus',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/200.png',
            number: '200',
            type: 'Ghost'
        },
        {
            name: 'Shedinja',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/292.png',
            number: '292',
            type: 'Ghost'
        },
        {
            name: 'Sableye',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/302.png',
            number: '302',
            type: 'Ghost'
        },
        {
            name: 'Shuppet',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/353.png',
            number: '353',
            type: 'Ghost'
        },
        {
            name: 'Banette',
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/354.png',
            number: '354',
            type: 'Ghost'
        }
    
    ])
    const [pokemonsType, setPokemonsType] = useState(pokemonsList)
    return (
        <PokemonContext.Provider value={{
            pokemons:pokemonsList, 
            pokemonsType: pokemonsType,
            setPokemonsType: setPokemonsType
        }}>
            {props.children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider