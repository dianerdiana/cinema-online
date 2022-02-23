import { Modal, Form, Alert } from "react-bootstrap"

import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { API } from '../../config/api'

export default function Register(props) {

  let navigate = useNavigate();

  // const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  
  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  // console.log(form)

  const { email, fullName, password } = form;

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

      // Insert data user to database here ...
      const response = await API.post('/register', body, config);

      console.log(response);

      // Notification
      if (response.data.status == 'success') {
        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
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
          Register
        </h2>

        {message && message}

        <Form.Control 
          type="email" 
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email" 
        />

        <Form.Control 
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />

        <Form.Control 
          type="text" 
          name="fullName"
          value={fullName}
          onChange={handleChange}
          placeholder="Name"
        />

        <button className="btn-form">
          Register
        </button>

        <p className="p-register">
          Already have an account? Click<button className="btn-here">Here</button>
        </p>

      </Form>
      </Modal.Body>
    </Modal>
  )
}