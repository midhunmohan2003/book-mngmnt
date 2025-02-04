import React from 'react'
import Mybooks from '../Components/Mybooks'
import { Col, Row } from 'react-bootstrap'


function Dashboard() {
  return (
    <>
       <Row>
        {/* my projects */}
        <Col sm={12} md={8}>
         
          <Mybooks/>
        </Col>
        </Row>
    </>
  )
}

export default Dashboard
