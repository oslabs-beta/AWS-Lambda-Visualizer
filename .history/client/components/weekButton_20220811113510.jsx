import React from 'react'
import {FormControl, Button} from '@mui/material'
import { InfoContext } from "../containers/MainContainer.jsx";


export default function WeekButton() {
  //run a fetch request to metric router time period 24hr
  
  let start = new Date(Math.round(new Date().getTime()) - ((24*7) * 3600 * 1000));
  start.toISOString();
  const end = new Date();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('I am the week button');
    fetch('/metric', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({startTime: start, endTime: end, metricName: 'Invocations', period: 86,400})
    }).then((response) => response.json())
    .then(data => {
      console.log({data})
      console.log(typeof data)
  })
}
  return (
      <Button className="LumosButton" onClick={submitHandler}> 1 Week</Button>
  )
}






