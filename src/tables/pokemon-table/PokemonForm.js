import React, { Component } from 'react'

class PokemonForm extends Component {
  constructor (props) {
    super(props)
    const { monToEdit } = this.props
    if (monToEdit) {
      this.state = {
        number: monToEdit.number,
        name: monToEdit.name,
        type: monToEdit.type,
        image: monToEdit.image
      }
    } else {
      this.state = {
        number: '',
        name: '',
        type: '',
        image: ''
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.addPokemon(this.state)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className='pokemon-background'>
        <div>
          <label>
            Number:<input type='text' value={this.state.number} name='number' onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Name:<input type='text' value={this.state.name} name='name' onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Type:<input type='text' value={this.state.type} name='type' onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Image:<input type='text' value={this.state.image} name='image' onChange={this.handleInputChange} />
          </label>
        </div>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default PokemonForm
