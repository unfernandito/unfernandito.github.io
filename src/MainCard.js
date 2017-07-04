import React, { PureComponent } from 'react'
import {
	Container,
	Row,
	Col,
	Jumbotron,
	Button
} from 'reactstrap'

export default class MainCard extends PureComponent {
  constructor (props) {
	  super(props)
  }

  render () {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className='display-3 text-center'>{this.props.name}</h1>
              <hr className='my-2' />

              <p className='lead'>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className='my-2' />
              <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
              <p className='lead'>
                <Button color='primary'>Learn More</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    )
  }
}
