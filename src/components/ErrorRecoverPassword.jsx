import React from 'react'
import { IoWarning } from "react-icons/io5";

const ErrorRecoverPassword = ({ message }) => {
  return (
    <div>
         <h2 style={{ textAlign: 'center' }}><IoWarning /> </h2>
        <h2 style={{ textAlign: 'center' }}>¡Ocurrió un error!</h2>
        <p style={{ textAlign: 'center', fontSize: '18px' }}>{message}</p>
    </div>
  )
}

export default ErrorRecoverPassword