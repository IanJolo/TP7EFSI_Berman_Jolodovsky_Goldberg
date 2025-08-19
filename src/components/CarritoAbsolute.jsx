import React from 'react'
import './CarritoAbsolute.css'
import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import CardCarritoHamburguer from './CardCarritoHamburguer';

export default function CarritoAbsolute({setMostrarCarrito}) {
    const { carrito } = useContext(CarritoContext);
    const navigate = useNavigate();

    const irAPagar = ()=>{
        navigate("/carrito");
        setMostrarCarrito(false);
    }

  return (
        <div className="productos-carrito-ham">
        {carrito.length>0 ?(
          <>
          <div class="products">
          {
            
            carrito.map((element, i) => {
                return <CardCarritoHamburguer key={i} producto={element}  />
            })
          }
          </div>
          <button class="btn" onClick={irAPagar}>Ir a pagar</button>
          </>
        ) : (
            <div>
                <p>No tienes ningún producto en el carrito actualmente</p>
            </div>
            )}
        </div>
  )
}
