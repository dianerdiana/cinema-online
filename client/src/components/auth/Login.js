import { Modal, Form, Alert } from "react-bootstrap"
import { API } from '../../config/api'

import { useNavigate } from 'react-router-dom'

import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';

export default function Login(props) {

  const [state, dispatch] = useContext(UserContext);
  const [message, setMessage] = useState(null);

  // Store data with useState here ...
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Create Configuration Content-type here ...
      // Content-type: application/json
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      // Convert form data to string here ...
      const body = JSON.stringify(form);

      // Insert data user for login process here ...
      const response = await API.post('/login', body, config);

      // Checking process
      if (response?.status == 200) {
        // Send data to useContext
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response.data.data.user,
        });

        // Status check

        const alert = (
          <Alert variant="success" className="py-1">
            Login success
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Login failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  };

  return(
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
      <Form onSubmit={handleSubmit} className="form">
        <h2>
          Login
        </h2>

        {message && message}

        <Form.Control 
          type="email" 
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <Form.Control 
          type="password" 
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        /> 

        <button className="btn-form">
          Login
        </button>

        <p className="p-login">
          Don't have an account? Click<button className="btn-here">Here</button>
        </p>

      </Form>
      </Modal.Body>
    </Modal>
  )
}