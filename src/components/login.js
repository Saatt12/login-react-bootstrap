import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import descarga from './descarga.png' 


export default function Login() {
  return (
    <>
        <Container>
            <h1 className='text-primary shadow-sm mt-5 p-3 text-center rounded'>Login</h1>
            <Row className='mt-5'>
                <Col lg={6} md={8} className="p-5 m-auto shadow-sm rounded">
                    <Form className='d-grid'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
            <p className='forgot-password text-center mt-5 text-primary'>
                <NavLink>forgot password?</NavLink>
            </p>
        </Container>        
    </>
  )
}
