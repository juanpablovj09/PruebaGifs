import React, { useState, useRef } from "react";
import "@styles/components/Login.scss";
import { Container, Card, Col, Row, Form, Button, Alert } from "react-bootstrap";
import { useLocation } from "wouter";
import { useAuth } from '../context/AuthContext';

function Login() {
  const [estaRegistrandose, setEstaRegistrandose] = useState(false);
  const [path, pushLocation] = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginGoogle, login, register, currentUser } = useAuth();

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(currentUser) return setError('Another count is already in use')
      if(estaRegistrandose) {
        try {
          setLoading(true)
          setError('')
          await register(email, password)
          pushLocation('/')
        } catch {
          setError('Failed to register')
        } 
      }
        else {
          try {
            setLoading(true)
            setError('')
            await login(email, password)
            pushLocation('/')
          } catch(error) {
            setError('Failed to login')    
          }
      }
    setLoading(false)

  }

  const handleClick = (e) => {
    e.preventDefault()
    setEstaRegistrandose(!estaRegistrandose);
    setError('')
  }

  const handleLoginGoogle = () => {
    if(currentUser) return setError('Another count is already in use')
    loginGoogle()
  }
  

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h1 className="text-center mt-2">
                {estaRegistrandose ? "Regístrate" : "Iniciar sesión"}
              </h1>
              <Form className="Login-form mt-4" onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group id="password" className="mt-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button
                  variant="dark"
                  type="submit"
                  className="w-100 mt-4"
                  disabled={loading}
                >
                  {estaRegistrandose ? "Registrase" : "Iniciar sesión"}
                </Button>
              </Form>
              <div className="Login-button">
              {error && <Alert className='mt-4 Login-alert' variant='danger'>{error}</Alert>}
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mt-4"
                  onClick={handleLoginGoogle}
                >
                  Acceder con Google
                </Button>

                <Button
                  className="w-100 mt-4"
                  variant="secondary"
                  onClick={handleClick}
                >
                  {estaRegistrandose
                    ? "¿Ya tienes cuenta? Inicia sesión"
                    : "¿No tienes cuenta? Regístrate"}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
