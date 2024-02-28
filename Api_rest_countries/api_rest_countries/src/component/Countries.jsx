import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
          .then((response) => {
            console.log(response);
            setCountries(response.data)
        }).catch(error => console.error(error))
    }, [])
    return ( 
        <div>
            <h1>Liste des pays</h1>
            <div className='inputSearch'>
            <label htmlFor="search">Recherchez un pays :</label>
                <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        <div className="card-container">
        {countries &&
          countries.filter((country) =>
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      ).map((country) => (
            <div key={country.id} className="card">
                <div className="img-container">
                    <img src={country.flags.png} alt="Country Flag" className='img'/>
                </div>
             <div className="card-content">
                <h2 className="card-title">{country.translations?.fra?.common}</h2>
                <p className="card-text"><strong>Capital: </strong> {country.capital}</p>
                <p className="card-text"> <strong>Région: </strong> {country.region}</p>
                <p className="card-text"><strong>Population: </strong> {country.population}</p>
             </div>
            </div>
          ))}
      </div>
      </div>
     );
}
 
export default Countries;