import React from 'react';
import contacts from '../data';
import {useParams, useSearchParams} from "react-router-dom";
import {Link} from "react-router-dom"


const Contact = () => {
    const { contactId, mode} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    
    return ( 
        <div className="contact-list-container">
        <h2>Liste des Contacts</h2>
        <div className="contact-cards">
          {contacts.map(contact => (
            <div key={contact.id} className="contact-card">
              <h3>{contact.nom} {contact.prenom}</h3>
              <p>Email: {contact.email}</p>
              <p>Téléphone: {contact.telephone}</p>
            <div className="button-container">
                <Link to={`/contacts/edit/${contact.id}?mode=edit`}>
                <button>Modifier</button>
                </Link>
                <Link to={`/contacts/edit/${contact.id}?mode=delete`}>
                <button>Supprimer</button>
                </Link>
                
            </div>
            </div>
          ))}
          <div>
          <Link to="/contacts/edit/new?mode=add">
            <button>Ajouter un nouveau contact</button>
          </Link>
          </div>
        </div>
      </div>
     );
}
 
export default Contact;