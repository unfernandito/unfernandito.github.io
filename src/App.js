import React, { Component } from 'react'
import NavBar from './Navbar'
import FooterBar from './Footer'
import MainCard from './MainCard'

export default class App extends Component {
  render () {
    return (
      <div>
        <NavBar brand='Luis Fernando' />

        <div style={{marginTop: 10}}>
          <MainCard name='Luis Fernando' />
        </div>
      </div>
    )
  }
}
