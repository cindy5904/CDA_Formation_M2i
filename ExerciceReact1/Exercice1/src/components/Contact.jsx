import React from 'react';

const Contact = ({nom, prenom, numeroTel}) => {
    return ( 
        <tr>
            <td>{nom}</td>
            <td>{prenom}</td>
            <td>{numeroTel}</td>
        </tr>
     );
}
 
export default Contact;