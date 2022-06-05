
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { CardStyle } from '../styles/Style';

export const ListProducts = () => {
    const url= "https://appi-cafes.herokuapp.com/productosCafes";
    const [products, setProducts ] = useState([]);
    const getData  = async() => {
          const {data} =await axios.get(url)  
        
        setProducts(data);
     }
    
   getData()
   const erase =  ({ target }) => {
     axios.delete(`https://appi-cafes.herokuapp.com/productosCafes/${target.id}`)
      }
      
   
  return (
      <CardStyle>
    
        {
        products.map((coffes) => (
            
    <div >    
      <Card style={{ width: '18rem' }} key={coffes.id} >
     <Card.Img variant="top" src={coffes.imagen} />
      <Card.Body>
       <Card.Title>{coffes.nombre}</Card.Title>
    <Card.Text>{coffes.Valor}</Card.Text>
    <Card.Text>{coffes.Categoria}</Card.Text>
    <Button id={coffes.id} onClick={erase} variant="danger">Delete</Button>
  </Card.Body>
</Card>
</div>
))
}

    </CardStyle>
  )
}
