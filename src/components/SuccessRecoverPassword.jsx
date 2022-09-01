import React from 'react'
import { BsShieldCheck } from "react-icons/bs";

const SuccessRecoverPassword = () => {
  return (
    <div>
        <h2 style={{ color: "#224B0C", textAlign: 'center', fontSize: '80px', marginBottom: '32px' }}><BsShieldCheck /></h2>
        <h2 style={{ color: '#fff' }}>Contraseña actualizada correctamente</h2>
    </div>
  )
}

export default SuccessRecoverPassword