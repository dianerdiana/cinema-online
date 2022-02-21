import { useState } from "react";
import { Container, Form } from "react-bootstrap";

//import component
import Navbar from "../components/Navbar"

export default function AddFilm() {

  const [isLogin, setIsLogin] = useState(true);

  return(
    <Container fluid>
      <Navbar isLogin={isLogin}/>
      <Form className="form add-film-form">
        <h2 className="add-film-title">
          Add Film
        </h2>

        <Form.Group className="form-group">
          <Form.Control className="input-title" type="text" placeholder="Title"/>
          <Form.Control id="input-file" className="input-file" type="file"/>
          <Form.Label 
            htmlFor="input-file" 
            className="form-control input-file-label"
          >
            <span>Attach Thumbnail</span>
            <img src="/assets/icons/attach-thumbnail.png"/>
          </Form.Label>
        </Form.Group>

        <Form.Control type="text" placeholder="Category" />

        <Form.Control type="text" placeholder="Price" />

        <Form.Control type="text" placeholder="Link Film" />

        <Form.Control as="textarea" placeholder="Description" rows={6} />

        <Form.Group className="form-group">
          <button className="btn-add-film">
            Add film
          </button>
        </Form.Group>


      </Form>
    </Container>
  )
}