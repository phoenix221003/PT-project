import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [message, setMessage] = useState([])

  function handleName(e) {
    setName(e.target.value)
  }
  function handleEmail(e) {
    setEmail(e.target.value)
  }
  function handleMessage(e) {
    setMessage(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    let contact = {
      name: name,
      email: email,
      message: message
    }



    axios.post("http://localhost:3000/contact/add", contact)
    .then(res => console.log(res))

    alert('Your message has been sent!')
    window.location.reload();
  }




    
  return (
    <div className="contact">
        <Form>
        <Form.Group className="mb-3 contact-form-item" controlId="exampleForm.ControlInput1">
            
            <Form.Control value={name} onChange={handleName} type="text" placeholder="NAME" />
        </Form.Group>
        <Form.Group className="mb-3 contact-form-item" controlId="exampleForm.ControlInput1">
            
            <Form.Control value={email} onChange={handleEmail} type="email" placeholder="E-MAIL" />
        </Form.Group>
        <Form.Group className="mb-1 contact-form-item" controlId="exampleForm.ControlTextarea1">
            
            <Form.Control value={message} onChange={handleMessage} as="textarea" rows={8} placeholder="MESSAGE" />
        </Form.Group>
        <button onClick={(e) => handleSubmit(e)} className="contact-button">SEND</button>
        </Form>
    </div>
  );
}
export default Contact;
