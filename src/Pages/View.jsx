import React from 'react'
import Books from '../Components/Books'
import { Col, Row } from 'react-bootstrap'


function View() {
  return (
    <>
       <div className="projects mt-5 ">
        <h1 className='text-center mb-5'>All Books</h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex border w-50 rounded mb-3">
            <input type="text" className='form-control' placeholder='search by books' />
            <i class="fa-solid fa-magnifying-glass" style={{marginLeft:'-50px', paddingTop:'15px'}}></i>
          </div>
        </div>
      </div>

      <Row  className="container-fluid mt-5">
        <Col sm={12} md={6} lg={4}>
        <Books/>
        </Col>
      </Row>
    </>
  )
}

export default View
