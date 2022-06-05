
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { FormStyle } from '../styles/Style';

export const FormAdd = () => {
    const url= "https://appi-cafes.herokuapp.com/productosCafes";
    const [values, setValues] = useState({
        nombre: "",
        imagen: "",
        Valor: "",
        Categoria:""
      });
     
      const handleChange = ({ target })=> setValues({
          ...values,
          [target.name]: target.value
        })
    
      const handleSubmit = async() => {
    
        try{
            await axios.post(url,values)
            }
        catch (error){
            console.log(error)
           

        }
        
      };


  return (
    <FormStyle>
        <h1>Agrega tu nuevo producto</h1>
    <Form>
    <Form.Group className="mb-3" htmlFor="basic-url">
    <Form.Label>URL </Form.Label>
    <Form.Control name="imagen" onChange={handleChange} type="url" placeholder="Enter Url " />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label> Coffe Name</Form.Label>
    <Form.Control name="nombre" onChange={handleChange} as="textarea" rows={1} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label> package value</Form.Label>
    <Form.Control name="Valor" onChange={handleChange} as="textarea" rows={1} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>National/ International</Form.Label>
    <Form.Control name="Categoria" onChange={handleChange} as="textarea" rows={1} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary"  onClick={handleSubmit} type="submit">
    Send
  </Button>
</Form>
    </FormStyle>
  )
}
