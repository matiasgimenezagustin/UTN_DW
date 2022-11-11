import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
export default function Navbar({tituloPagina, color}) {
  return (
    <nav style={{backgroundColor: color}}>
        <h2>{tituloPagina}</h2>
        <ul>
            <li>
                <NavLink to="/red">
                    Ir a modo rojo
                </NavLink>
            </li>
            <li>
                <Button> Hola</Button>
            </li>
            <li>
                <NavLink to="/">Ir a productos</NavLink>
            </li>
        </ul>
        
    </nav>
  )
}
