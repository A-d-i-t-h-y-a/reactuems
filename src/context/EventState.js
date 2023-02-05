import React, { useState } from 'react'
import EventsContext from './events'

const EventState = (props)=>{
    const [events, setEvents] = useState([])

    const getEvents = async ()=>{
        const response = await fetch(`http://localhost:5000/api/event/events`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        // console.log(json);
        setEvents(json);
    }

    const updateStatus = async (eventid, status)=>{
        const response = await fetch(`http://localhost:5000/api/event/update/${eventid}`, {
            method : "PUT",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({status})
        })
        const json = await response.json();
        let newStatus = JSON.parse(JSON.stringify(events))
        // for (let index = 0; index < newStatus.length; index++) {
        //     const element = newStatus[index];
        //     if (element._id === eventid) {
        //         newStatus[index].status = status;
        //         break;
        //     }
        // }
        for (let item of newStatus) {
            if (item._id === eventid) {
                item.status = status;
                break;
            }
        }
        setEvents(newStatus)
    }

    return (
        <EventsContext.Provider value={{ events, setEvents, getEvents, updateStatus }}>
            {props.children}
        </EventsContext.Provider>
    )
}

export default EventState;