import React from 'react';
import Contact from './Contact';

const Repertoire = () => {
    return ( 
        <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Téléphone</th>
                    </tr>
                </thead>
                <Contact/>
            </table>
     );
}
 
export default Repertoire;