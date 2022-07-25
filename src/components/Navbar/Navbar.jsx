import { useContext } from 'react'
import { PokemonContext } from '../../Context/PokemonContext'

import './navbar.css'
import Pokemon from '../../assets/pokemon-logo.png'

export const Navbar = () => {
    const {pokemons, setPokemonsType} = useContext(PokemonContext)
    const changeType = (pokemonType) => {
        let newType = []
        if(pokemonType === 'All'){
            newType = pokemons
            setPokemonsType(newType)
        }else{
            newType = pokemons.filter(pokemon => pokemon.type === pokemonType)
            setPokemonsType(newType)
        }
    }

    return (
    <div className="navbar">
        <div className="container">
            <div className="logo">
                <img src={Pokemon} alt="" srcSet="" />
            </div>
            <div className="menu">
                <a href="#" className='menu-button all' onClick={() => changeType("All")}>All</a>
                <a href="#" className='menu-button bug' onClick={() => changeType("Bug")}>Bug</a>
                <a href="#" className='menu-button fire' onClick={() => changeType("Fire")}>Fire</a>
                <a href="#" className='menu-button electric' onClick={() => changeType("Electric")}>Electric</a>
                <a href="#" className='menu-button water' onClick={() => changeType("Water")}>Water</a>
                <a href="#" className='menu-button ghost' onClick={() => changeType("Ghost")}>Ghost</a>
                <a href="#" className='menu-button grass' onClick={() => changeType("Grass")}>Grass</a>
            </div>
        </div>
    </div>
    )
}