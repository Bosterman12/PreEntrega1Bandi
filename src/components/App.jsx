
import './App.css';
import {Navbar} from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemCount } from './ItemCount/ItemCount';

import React from 'react';

export const App = () => {
  return (
    
    <div>
      <Navbar nombre={"El Surubi"}/>
      <ItemCount ValInicial={1} stock={10} />
      <ItemListContainer/>
    </div>
  
  );
}


