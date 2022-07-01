import React from 'react'
import PropTypes from 'prop-types'

import {Container,Row, Col, Form, Button} from 'react-bootstrap'

export const ResetPassword = ({handleOnChange,handleResetSubmit,email,formSwitcher}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-info text-center'>Reset Password</h1>
                <hr/>
                <Form onSubmit={handleResetSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type= "email"
                            name= "email"
                            onChange={handleOnChange}
                            value={email}
                            placeholder='Enter Email'
                            required
                        />
                    </Form.Group>
                    
                    <Button type='submit'>Login</Button>
                </Form>
                <hr/>
            </Col>
        </Row>

        <Row>
            <Col>
                <a href="#!" onClick={() =>formSwitcher('login')}> Reset Password</a>
            </Col>
        </Row>

    </Container>
  )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
   
}