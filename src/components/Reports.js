import React, { useContext , useEffect, useState } from 'react'
import eventsContext from '../context/events'
export default function Reports() {
    const context = useContext(eventsContext);
    const {getEvents,events} = context;
    useEffect(()=>{
        if(localStorage.getItem('token')){
            getEvents();
        }
    },[])
    const [filter, setFilter] = useState({ todate:"" , fromdate:"" , etype:"" , venue:"" })
    const handleonChange = (e)=>{
        setFilter({...filter, [e.target.name]:e.target.value})
    }

    const filtertable = ()=>{
        const table = document.getElementsByClassName('tbody')
    }

    useEffect(()=>{
        filtertable()
    }, [filter])
    let i = 0;
    return (
        <>
            <div className="container mt-2">
                <button className="btn my-3 btn-outline-primary" data-bs-toggle="collapse" data-bs-target="#filter" aria-expanded="false" aria-controls="filter"><i className="bi bi-filter-right me-2"></i>Filter</button>
                <div id="filter" className="collapse">
                    <div className="row input-group mb-3 mx-0">
                        <span className="col-lg-1 input-group-text">From Date</span>
                        <input type="date" className="col-lg-5 form-control" name="fromdate" value = {filter.fromdate} onChange = {handleonChange}/>
                        <span className="input-group-text col-lg-1">To Date</span>
                        <input type="date" className="col-lg-5 form-control" name="todate" value = {filter.todate} onChange = {handleonChange}/>
                    </div>
                    <div className="row input-group my-4 mx-0">
                        <span className="col-lg-1 input-group-text">Event Type</span>
                        <select className="form-select col-lg-5 me-sm-2" id="inputGroupSelect01" name="etype" value={filter.etype} onChange={handleonChange}>
                            <option selected value="">None</option>
                            <option>Offline</option>
                            <option>Online</option>
                        </select>
                        <span className="col-lg-1 input-group-text">Venue</span>
                        <select className="form-select col-lg-5" id="inputGroupSelect02" name="venue" value={filter.venue} onChange={handleonChange}>
                            <option selected value="">None</option>
                            <option>Auditorium</option>
                            <option>Mini Auditorium</option>
                        </select>
                    </div>
                </div>
                <h2>Reports</h2>
                <div className='table-responsive'>
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
                            {
                                events.map((event)=>{
                                    i+=1;
                                    return <tr key={event._id} className="tbody"><th>{i}</th><td>{event.name}</td><td>{event.description}</td><td>-</td></tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
