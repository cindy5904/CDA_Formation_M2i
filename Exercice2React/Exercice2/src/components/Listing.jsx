import React from 'react';
import Bouton from './Bouton';

const Listing = () => {
    let component = ['Smith', 'John', 'Jane', 'David']
    const clickButtonFromListing = () =>{
        component.push('Laura')
        console.log(component);
    } 
        return ( 
        <div>
            <h1>Clique</h1>
            <Bouton component={component} clickButtonFromListing={clickButtonFromListing} />
        </div>
     );
}
 
export default Listing;