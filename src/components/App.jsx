
import './App.css';
import {Navbar} from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';


import React from 'react';

export const App = () => {
  return (
    
    <div>
      <Navbar nombre={"El Surubi"}/>
      <ItemListContainer/>
    </div>
  
  );
}


