import React from 'react'
import axios from 'axios'
import Pokemon from './Pokemon'

class PokemonApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pokemon: ''
    }
  }

  componentDidMount(){
    let pokemonPromises = [];
    const url2 = 'https://pokeapi.co/api/v2/pokemon'
    for (var i = 1; i < 7; i++) {
      pokemonPromises.push(
        axios.get(`${url2}/${i}`, { headers: { Accept: 'application/json' }})
      )
    }
    (async () => {
      try {
        const pokemon = await Promise.all(pokemonPromises)
        const pokemonMap = pokemon.map((each) => each.data )
        this.setState({ pokemon: pokemonMap })
      } catch(e) {
        console.log(`Error while fetching pokemon - ${e}`)
      }
    })()
  }

  render(){
    const { pokemon } = this.state
    return (
      <div>
        { !pokemon &&
          <h1>Loading...</h1>
        }
        { pokemon &&
          <table className='pokemon-background'>
            <thead>  
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {/* map the array of pokemon data to an array of <Pokemon /> components */}
              {/* <Pokemon mon={pokemon[0]}/> */}
              { 
                pokemon.map(mon => <Pokemon mon={mon} key={mon.name} /> ) 
              }
            </tbody>
          </table>
        }
      </div>
    )
  }
}

export default PokemonApp
