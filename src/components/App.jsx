
import './App.css';
import {Navbar} from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailComtainer/ItemDetailContainer';



import React from 'react';

export const App = () => {
  return (
    
    <div>
      <Navbar nombre={"El Surubi"}/>
      
      <ItemListContainer/>
      <ItemDetailContainer/>
     
    </div>
  
  );
}


