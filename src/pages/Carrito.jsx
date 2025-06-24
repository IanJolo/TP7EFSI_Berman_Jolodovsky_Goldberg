import React from 'react'
import { useState, useEffect } from 'react';
import CarritoCard from '../components/CarritoCard';



export default function Carrito() {
    const[carro,setCarro]=useState([]);
    useEffect(()=>{
        setCarro(JSON.parse(localStorage.getItem('carrito')))
    },[])
  return (
    <>
    <div>Carrito</div>
    {
        carro.map((item,index )=>{
            return <CarritoCard key={index} producto={item} />
        })
    }
    </>
    
  )
}
