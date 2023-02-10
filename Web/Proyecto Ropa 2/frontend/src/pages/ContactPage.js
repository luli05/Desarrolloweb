import React from "react";
import  {useState}  from "react";
import  axios  from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';



const ContactPage = (props) => {

  const initialForm = {
    nombre: '',
    email: '',
    telefono:'',
    mensaje:'',
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

const handleChange = e => {

  const  {name, value} = e.target;
  setFormData(oldData =>  ({
    ...oldData,
    [name]: value
  }));
} 

const handleSubmit = async e => {
  e.preventDefault();
  setMsg('');
  setSending(true)
  const response = await axios.post('http://localhost:3000/api/contacto', formData);
  setSending(false);
  setMsg(response.data.message);
  if(response.data.error === false) {
    setFormData (initialForm)
  }

}




  return (
        <main class="holder contacto">
          <div>
            <h2>Contacto Rapido</h2>
            <form action="/contacto" method="post" onSubmit={handleSubmit} class="formulario">
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="nombre" placeholder="Nombre" name="nombre" value={formData.nombre} onChange={handleChange}/>
      </Form.Group>
              {/* <p>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
              </p> */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name="email" value={formData.email} onChange={handleChange}/>
      </Form.Group>
              {/* <p>
                <label for="email">Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
              </p> */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="telefono" placeholder="Telefono"name="telefono" value={formData.telefono} onChange={handleChange} />
      </Form.Group>
              {/* <p>
                <label for="telefono">Telefono</label>
                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
              </p> */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" placeholder="Texto"name="mensaje" value={formData.mensaje} onChange={handleChange} rows={3} />
      </Form.Group>
              {/* <p>
                <label for="mensaje">Mensaje</label>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
              </p> */}
              <p class="acciones"><input type="submit" value="Enviar" /></p>
             
            </form> 
            {sending ? <p>Enviando... </p> : null}
              {msg ? <p>{msg} </p> : null}
          </div>

        </main>
  );  
  
}

export default ContactPage;