
import './App.css';
import {Navbar} from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemCount } from './ItemCount/ItemCount';
import { Item } from './Item/Item';

import React from 'react';

export const App = () => {
  return (
    
    <div>
      <Navbar nombre={"El Surubi"}/>
      <ItemCount ValInicial={1} stock={10} />
      <ItemListContainer/>
      <Item item={{
        "id":12,
        "idCategoria":4,
        "nombre":"Anguila x 12",
        "marca":"Pocho",
        "modelo":"Anguila",
        "precio":4000,
        "stock":30,
        "img":"anguila.jpg"
      }}/>
    </div>
  
  );
}


