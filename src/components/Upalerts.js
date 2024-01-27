import React from 'react'

function Upalerts(props) {
  
  const capital = (word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1) ;
  }
  if (props.alerts!==`null`){
  return (
      <div >
        <div className={`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
        <strong>{capital(props.alerts.type)}</strong> : {props.alerts.msg}
        </div>
      </div>
  )
}}

export default Upalerts
