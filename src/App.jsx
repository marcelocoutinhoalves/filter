import { useContext } from 'react'
import { PokemonContext } from './Context/PokemonContext'
import './App.css'
import { Card } from './components/Card/Card'
import { Navbar } from './components/Navbar/Navbar'



function App() {
  const {pokemonsType} = useContext(PokemonContext)
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="card-group">
          {pokemonsType.map((pokemon, index) => {
            return <Card pokemon={pokemon} key={index}/>
          })}
        </div>
      </div>
    </>
  )
}

export default App
