import * as React from 'react'

export const EmailTemplate = ({ name, email, phone, asunto, message }) => (
  <div>
    <h1>Te ha contactado: {name}</h1>
    <h1>Asunto: {asunto}</h1>
    <h1>Telefono: {phone}</h1>
    <h1>Email: {email}</h1>
    <h1>Mensaje: {message}</h1>
  </div>
)

export default EmailTemplate
