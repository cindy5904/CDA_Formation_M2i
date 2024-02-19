import React from 'react';
import Contact from './Contact';
import { contacts } from '../data'

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
                <tbody>
                {contacts.map(contact => ( 
                    <Contact
                        key={contact.id}
                        
                        nom ={contact.nom} prenom={contact.prenom} numeroTel={contact.numeroTel} />
                    
        ))}
                </tbody>
            </table>
     );
}
 
export default Repertoire;