import React from 'react';

export const Cartwidget = ({cantCarrito}) => {
    return (
        <>
           <button className="btn btn-dark">Carrito</button>
           <p>{cantCarrito}</p> 
        </>
    );
}


