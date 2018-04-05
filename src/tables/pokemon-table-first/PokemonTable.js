import React, { Component } from 'react'
import Pokemon from './Pokemon'

class PokemonTable extends Component {
  render () {
    const { pokemons } = this.props
    return (
      <table className='pokemon-background'>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Type</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(pokemons).map(num => {
              return (
                <Pokemon key={num} mon={pokemons[num]} toggleShowForm={this.props.toggleShowForm} />
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

export default PokemonTable
