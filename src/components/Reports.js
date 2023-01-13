import React from 'react'

export default function Reports() {
    return (
        <>
            <div className="container mt-2">
                <button className="btn my-3 btn-outline-primary" data-bs-toggle="collapse" data-bs-target="#filter" aria-expanded="false" aria-controls="filter"><i className="bi bi-filter-right me-2"></i>Filter</button>
                <div id="filter" className="collapse">
                    <div className="row input-group mb-3 mx-0">
                        <span className="col-lg-1 input-group-text">From Date</span>
                        <input type="date" className="col-lg-5 form-control" name="date" />
                        <span className="input-group-text col-lg-1">To Date</span>
                        <input type="date" className="col-lg-5 form-control" name="date" />
                    </div>
                    <div className="row input-group my-4 mx-0">
                        <span className="col-lg-1 input-group-text">Event Type</span>
                        <select className="form-select col-lg-5 me-sm-2" id="inputGroupSelect01" name="type">
                            <option selected>Offline</option>
                            <option value="1">Online</option>
                        </select>
                        <span className="col-lg-1 input-group-text">Venue</span>
                        <select className="form-select col-lg-5" id="inputGroupSelect01" name="venue">
                            <option selected>Auditorium</option>
                            <option value="1">Mini Auditorium</option>
                        </select>
                    </div>
                </div>
                <h2>Results</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Event Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
