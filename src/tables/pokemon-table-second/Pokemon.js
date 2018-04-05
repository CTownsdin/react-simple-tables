import React from 'react'

class Pokemon extends React.Component {

  render(){
    const { mon } = this.props
    return (
      <tr>
        <td>
          {mon.id}  
        </td>
        <td>
          {mon.name}
        </td>
        <td>
          {mon.height}
        </td>
        <td>
          {mon.weight}
        </td>
        <td>
          <img src={mon.sprites.front_default} alt={`Pokemon ${mon.name}`} />
        </td>
      </tr>
    )
  }
}

export default Pokemon
