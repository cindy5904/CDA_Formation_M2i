import React from 'react';
import { useState } from 'react';

const Input = () => {
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
  
    const PrenomChange = (e) => {
      setPrenom(e.target.value);
    };
  
    const NomChange = (e) => {
      setNom(e.target.value);
    };
  
    return ( 
        <div>
            <div>
                <input type="text" id="prenom" value={prenom} onChange={PrenomChange}/>
                <input type="text" id="nom" value={nom} onChange={NomChange}/>
            </div>
            <p>Bonjour, {prenom} <strong>{nom.toUpperCase()}</strong>, bienvenue sur l'application.</p>
        </div>
        
     );
}
 
export default Input;