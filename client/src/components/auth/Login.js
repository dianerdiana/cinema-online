import { Modal, Form } from "react-bootstrap"

export default function Login(props) {
  return(
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
      <Form className="form">
        <h2>
          Login
        </h2>

        <Form.Control type="email" placeholder="Email" />

        <Form.Control type="password" placeholder="Password" /> 

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