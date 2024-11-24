import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const [patientData,changePatientData]=useState(
        []
    )
    const fetchData=()=>{
axios.get("https://api.covidtracking.com/v1/us/daily.json").then(
    (response)=>{
        changePatientData(response.data)
    }
).catch()
    }
    useEffect(
    ()=>{fetchData()},[]
    )
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table class="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">States</th>
      <th scope="col">Positive</th>
      <th scope="col">Negative</th>
      <th scope="col">Pending</th>
      <th scope="col">Hospitalised currently</th>
      <th scope="col">Death</th>
    </tr>
  </thead>
  <tbody>
    {patientData.map(
        (value, index)=>{
            return <tr>
            <th scope="row">{value.date}</th>
            <td>{value.states}</td>
            <td>{value.positive}</td>
            <td>{value.negative}</td>
            <td>{value.pending}</td>
            <td>{value.hospitalizedCurrently}</td>
            <td>{value.death}</td>
          </tr>
        }
    )}
   
  </tbody>
</table>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Viewall
