import React from 'react'
import Sampledata from "../sample.json"

export default function AboutUs() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Latitude</th>
            <th scope="col">Longitude</th>
          </tr>
        </thead>
        <tbody>
          {
            Sampledata.map((record) => {
              let { id, name, lati, lon } = record
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{lati}</td>
                  <td>{lon}</td>
                </tr>);
            })
          }

        </tbody>
      </table>
    </div>
  )
}
