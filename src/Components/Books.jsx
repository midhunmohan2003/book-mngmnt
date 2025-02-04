import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'




function Books() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: '18rem' }} className='mt-5'>
      <Card.Img variant="top" src='https://tse3.mm.bing.net/th?id=OIP.XHxHkV3iucoWMdUIxacQcwHaFJ&pid=Api&P=0&h=180'  onClick={handleShow} width={"100%"} />
      <Card.Body>
        <Card.Title>Book Name</Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Row>
            <Col md={6}> <img src='https://tse4.mm.bing.net/th?id=OIP.4QY1_z2gNBFEvf3bv-BnvgHaJW&pid=Api&P=0&h=180' width={"100%"} alt="" /> </Col>
            <Col md={6}> 
              <h1>Book Name</h1>
              <h4>Author:ABCD</h4> 
              <p> <span>Overview:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus magni quibusdam incidunt odit aperiam porro modi voluptatibus sed! Tenetur aliquam molestias nemo alias. Laboriosam dolore minus officiis quidem at atque. </p>
            </Col>
            
          </Row>
         

        </Modal.Body>
      
      </Modal>
    </>
  )
}

export default Books
