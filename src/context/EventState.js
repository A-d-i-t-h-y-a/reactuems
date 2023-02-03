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

    return (
        <EventsContext.Provider value={{ events, getEvents }}>
            {props.children}
        </EventsContext.Provider>
    )
}

export default EventState;