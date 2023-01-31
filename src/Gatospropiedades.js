import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import misGatitos from './Gatitosinfo';

function Gatospropiedades(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <>
      <Button variant="warning btn-lg" onClick={handleShow}>
        Quiero más info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caracteristicas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
    

              <div className='imagesize' >   
            <div >
   
            <p> Caracter: {misGatitos[props.index].caracter}</p>
            <p> Genero: {misGatitos[props.index].genero}</p>

      
                        </div>
            </div>
       

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default Gatospropiedades;

