import React from 'react';

export const Categorias = () => {
    return (
        
           <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Articulos de Pesca
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Cañas</a></li>
              <li><a className="dropdown-item" href="#">Reeles</a></li>
              <li><a className="dropdown-item" href="#">Equipamiento</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Carnadas</a></li>
            </ul>
          </li>
          
        
    );
}

