import React, { PureComponent } from 'react'

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap'

export default class NavBar extends PureComponent {
  constructor (props) {
	  super(props)

	  this.toggle = this.toggle.bind(this)
	  this.state = {
	  	isOpen: false
	  }
  }

  toggle () {
  	this.setState({
  		isOpen: !this.state.isOpen
  	})
  }

  render () {
    return (
      <div>
        <Navbar color='faded' light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href='/'>{this.props.brand}</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/'>Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/unfernandito'>Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
