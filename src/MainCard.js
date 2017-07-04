import React, { PureComponent } from 'react'
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap'

import SocialButton from 'react-social-button'

export default class MainCard extends PureComponent {
  render () {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <Row>
                <Col>
                  <h1 className='display-3 text-center'>{this.props.name}</h1>
                  <hr className='my-2' />

                  <p className='lead text-center'>{this.props.description}</p>

                  <div className='text-center'>
                    <Row>
                      <Col>
                        <SocialButton
                          social='facebook'
                          btnProps={{
                            disabled: true,
                            onClick: function () { alert('Callback called.') }
                          }} />
                      </Col>

                      <Col>
                        <SocialButton
                          social='github'
                          btnProps={{
                            disabled: true,
                            onClick: function () { alert('Callback called.') }
                          }} />
                      </Col>

                      <Col>
                        <SocialButton
                          social='twitter'
                          btnProps={{
                            disabled: true,
                            onClick: function () { alert('Callback called.') }
                          }} />
                      </Col>

                    </Row>
                  </div>
                </Col>

                <Col>
                  <div className='text-center'>
                    <img className='img-responsive' alt='Perfil' style={{width: 240, height: 240}} src='https://avatars0.githubusercontent.com/u/6326186?v=3&s=460' />
                  </div>
                </Col>
              </Row>
              <br />
              <br />
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
