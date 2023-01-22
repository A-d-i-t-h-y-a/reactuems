import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            </a>
            <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a href="/"><i className='bi bi-facebook'></i></a></li>
            <li className="ms-3"><a href="/"><i className='bi bi-instagram text-black'></i></a></li>
            <li className="ms-3"><a href="https://github.com/A-d-i-t-h-y-a" target="_blank" rel="noreferrer"><i className='bi bi-github text-black'></i></a></li>
            </ul>
        </footer>
    </div>
  )
}
