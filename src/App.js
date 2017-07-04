import React, { Component } from 'react'
import NavBar from './Navbar'
import FooterBar from './Footer'
import MainCard from './MainCard'
import Projects from './Projects'

export default class App extends Component {
  render () {
    return (
      <div>
        <NavBar brand='Luis Fernando' />

        <div style={{marginTop: 10}}>
          <MainCard
            name='Luis Fernando'
            description='Venezolano, emprendedor, geek y programador.'
            twitter='UnF3rn4nd1t0'
            facebook='luis Fernando'
            github='unfernandito' />
        </div>

        <div>
          <Projects />
        </div>

        <FooterBar />
      </div>
    )
  }
}
