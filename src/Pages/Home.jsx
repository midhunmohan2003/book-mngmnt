import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <>
      <div style={{width:"100%", height:"70vh"}} className="container-fluid rounded bg-dark mt-5">
        <Row className="d-flex align-items-center p-5">
          <Col sm={12} md={6}>
              <h1 style={{fontSize:'80px'}} className='fw-bolder text-light mt-2'>  <i class="fa-solid fa-book-open-reader"></i> Book Management </h1>
              <Link to={'/view'} className='btn'>Start to Explore</Link> 
             
          </Col>
        
          <Col sm={12} md={6}>
             <img src='https://cdn.dribbble.com/users/444644/screenshots/9521173/media/945b37e2a579f3824208f163af08ad55.gif' alt="" width={"500px"} />
          </Col>

        </Row> 
      </div>
    </>
  )
}

export default Home
