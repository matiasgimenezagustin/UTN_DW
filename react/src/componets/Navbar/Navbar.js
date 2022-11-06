import React from 'react'
import "./Navbar.css"
export default function Navbar({tituloPagina, color}) {
  return (
    <nav style={{backgroundColor: color}}>
        <h2>{tituloPagina}</h2>
        <ul>
            <li>
                <a href='#'>contacto</a>
            </li>
            <li>
                <a href='#'>contacto</a>
            </li>
            <li>
                <a href='#'>contacto</a>
            </li>
        </ul>
        
    </nav>
  )
}
