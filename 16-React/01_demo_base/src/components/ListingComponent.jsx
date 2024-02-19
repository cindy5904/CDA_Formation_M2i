import React from 'react';

const ListingComponent = () => {
    const maListe = ['Toto', 'Tata', 'Titi']
    return (
        <div>
            <h1>Listing Componant</h1>
            <hr />
            <ul>
                {maListe.map((prenom, index) => <li key={index}>{prenom}</li>)}
            </ul>
        </div>
    )
}

export default ListingComponent;