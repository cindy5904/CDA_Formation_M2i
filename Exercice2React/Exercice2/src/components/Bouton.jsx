import React from 'react';

const Bouton = (props) => {
    let {component, clickButtonFromListing} = props
    const  clickButton= () => {
        clickButtonFromListing();
    }
     
    
    return ( 
        <div>
            <p>componant : {component}</p>
            <button onClick={clickButton}>Click here !</button>
        </div>
     );
}
 
export default Bouton;