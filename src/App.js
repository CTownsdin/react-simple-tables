import React, { Component } from 'react'
import './App.css'

// MUICSS
import Tabs from 'muicss/lib/react/tabs'
import Tab from 'muicss/lib/react/tab'

// TABLES
import PokemonApp from './tables/pokemon-table-second/PokemonApp'

class MuiTabs extends React.Component {
  onChange (i, value, tab, ev) {
    console.log(arguments)
  }

  onActive (tab) {
    console.log(arguments)
  }

  render () {
    return (
      <div>
        <Tabs onChange={this.onChange} defaultSelectedIndex={0}>
          <Tab value='pane-1' label='Tab 1' onActive={this.onActive}>
            <PokemonApp />
          </Tab>
          <Tab value='pane-2' label='Tab 2'>
            <SayHi />
          </Tab>
          <Tab value='pane-2' label='Tab 2'>
            <h1>That's all folks!</h1>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

class SayHi extends React.Component {
  render () {
    return (
      <h1>Hi</h1>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <MuiTabs />
      </div>
    )
  }
}

export default App
