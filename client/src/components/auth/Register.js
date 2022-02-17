import { Modal, Form } from "react-bootstrap"

export default function Register(props) {
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
          Register
        </h2>

        <Form.Control type="email" placeholder="Email" />

        <Form.Control type="password" placeholder="Password" />

        <Form.Control type="password" placeholder="Full Name" />

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