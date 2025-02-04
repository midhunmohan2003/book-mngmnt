import React from 'react'

function Mybooks() {
  return (
    <>
       <div className="card shadow mt-5">
        <div className="d-flex">
          <h2>My Books</h2>
        </div>
        <div className="ms-auto">
          <Addproject/>
        </div>
        <div className="border mt-4 container-fluid">
          <h2>Book Title</h2>
          <div className="d-flex ms-auto">
            <a className='me-3 btn text-dark'> <i class='fa-solid fa-pen-to-square'></i> </a>
            <a className='me-3 btn text-dark'> <i class='fa-brands fa-github'></i> </a>
            <button className='btn text-dark'> <i class='fa-solid fa-trash'></i> </button>
          </div>
        <p className='text-danger fw-bold'>No Books Added Yet...</p>
        </div>
      </div>
    </>
  )
}

export default Mybooks
