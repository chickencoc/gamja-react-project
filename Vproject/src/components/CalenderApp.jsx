import React from 'react'
import BtmCal from './calenderApp/BtmCal'

function CalenderApp() {
  return (
    <div id="calender">
        <h1><p style={{display: "inline-block", fontSize: "0.7em"}}>📅</p> Calender App</h1>
        <BtmCal />
    </div>
  )
}

export default CalenderApp