import React from 'react';
import { useLocation } from "react-router-dom";
import "../App.css";

const Success = () => {
  const location = useLocation();
console.log("----------------");
  console.log(location.state)
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <h1 className='form-success'>Form submitted!</h1>
        <div className='form-field'>
          <strong>
           <div className='form-field'>First Name: {location.state.fname}</div> 
            <div className='form-field'>Last Name: {location.state.lname}</div>
            <div className='form-field'>Middle Name: {location.state.mname}</div>
            <div className='form-field'>Address: {location.state.address},{location.state.country},{location.state.state},{location.state.zip}</div>
            <div className='form-field'>Email: {location.state.email}   Phone Number:{location.state.phone}</div>
            <div className='form-field'>Height: {location.state.height} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Weight:{location.state.weight}</div>
          </strong>
        </div>
      </div>
    </div>
  )
}

export default Success