import React from 'react';
import { useState,useEffect } from 'react';
import {consultarBDD} from "../utils/funciones.js"
import { ItemList } from '../ItemList/ItemList.jsx';

export const ItemListContainer = () => {
   const [productos, setProductos] = useState([]) 
   useEffect (() => {
    consultarBDD('./json/productos.json') .then (prods => {
        const items = ItemList ({prods})
        
        setProductos(items)
    })

   },[])

   return(
    
    <div className='row cardProductos'>
        
        {productos}
    </div>
  
    
   )
    
}


