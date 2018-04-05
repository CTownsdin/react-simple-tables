import React, { Component } from 'react'
import axios from 'axios'
import PokemonTable from './PokemonTable'
import PokemonForm from './PokemonForm'

class PokemonApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showForm: false,
    }
    this.addPokemon = this.addPokemon.bind(this)
    this.toggleShowForm = this.toggleShowForm.bind(this)
  }

  componentDidMount () {
    // // StarWars
    // const url1 = 'https://swapi.co/api/people/?format=json'
    // axios.get(url1)
    // .then((res) => this.setState({ swPeople: res.data.results }))
    // .catch((error) => {
    //   console.log(`Something broke! ${error}`)
    // })
    
    // Pokemon
    const url2 = 'https://pokeapi.co/api/v2/pokemon'
    // Get 1 pokemon.
    // // const urlBulbasaur = 'https://pokeapi.co/api/v2/pokemon/1'
    // // const urlCaterpie = 'https://pokeapi.co/api/v2/pokemon/10'
    // axios.get(url2)
    // .then((res) => this.setState({ pokemon: res.data.results }))
    // .catch((error) => {
    //   console.log(`Something broke! ${error}`)
    // })
    let pokemonPromises = [];
    for (var i = 1; i < 7; i++) {
      pokemonPromises.push(
        axios.get(`${url2}/${i}`, { headers: { Accept: 'application/json' }})
      )
    }
    // Pokemon, promise .then() style
    // Promise.all(pokemon)
    //   .then((allPokemon) => this.setState({ pokemon: allPokemon }))
    //   .catch((error) => { console.log(`Error while fetching pokemon - ${error}`)})
    
    // Pokemon, async await style
    const getSomePokemon = async () => {
      try {
        const pokemon = await Promise.all(pokemonPromises)
        const pokemonMap = pokemon.map((each) => each.data )
        this.setState({ pokemon: pokemonMap })
      } catch(e) {
        console.log(`Error while fetching pokemon - ${e}`)
      }
    }
    getSomePokemon();
    // poke-schema
    // id, name, height, weight, 
    // image is sprites, front detail or such
    


    // // Dad Jokes
    // const url3 = 'https://icanhazdadjoke.com/'
    // // axios.get(url3, { headers: { Accept: 'application/json' }})
    // // .then((res) => this.setState({ dadJokes: res.data }))
    // // .catch((error) => {
    // //   console.log(`Error while fetching dad jokes - ${error}`)
    // // })
    // // Loop for 6 jokes
    // let jokes = [];
    // for (var i = 0; i < 6; i++) {
    //   jokes.push(
    //     axios.get(url3, { headers: { Accept: 'application/json' }})
    //   )
    // }
    // Promise.all(jokes)
    //   .then((allJokes) => this.setState({ dadJokes: allJokes }))
    //   .catch((error) => { console.log(`Error While fetching data jokes - ${error}`)})
  }

  addPokemon (newPokemon) {
    let collection = this.state.pokemon
    collection[newPokemon.number] = newPokemon
    this.setState({ pokemons: collection })
  }

  toggleShowForm (monToEdit) {
    this.setState((prevState, props) => {
      return {
        showForm: !this.state.showForm,
        monToEdit: monToEdit
      }
    })
  }

  render () {
    const { pokemon } = this.state

    if (!pokemon) {
      return <h1>Loading...</h1>
    }

    return (
      <div>
        <PokemonTable pokemons={pokemon} toggleShowForm={this.toggleShowForm} />
        { this.state.showForm &&
          <PokemonForm addPokemon={this.addPokemon} monToEdit={this.state.monToEdit} />
        }
        <button onClick={() => this.toggleShowForm()}>
          Add
        </button>
      </div>
    )
  }
}

export default PokemonApp
