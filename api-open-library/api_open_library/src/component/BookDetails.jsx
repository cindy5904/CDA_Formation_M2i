import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const BookDetails = () => {
    const { olid } = useParams();
    const [bookDetails, setBookDetails] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
          try {
            const response = await axios.get(`https://openlibrary.org/works/${olid}.json`);
            setBookDetails(response.data);
            console.log(response.data);
            
          } catch (error) {
            console.error('erreur:', error);
          }
        };
    
        fetchdata();
      }, [olid]);

    //   const Imgurl =  bookDetails.covers ? `https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg` : 'Couverture du Livre';
    
    return ( 
        
        <div className="container-detail">
            <div className="card_detail">
                <div className="img">
                {/* <img src={`https://covers.openlibrary.org/b/id/${bookDetails?.covers[0]}-L.jpg`} alt={bookDetails.title} />                */}
                </div>
                <div className="content_detail">
                    {/* <h1>{bookDetails?.title}</h1> */}
                    {/* <p>Auteur: {bookDetails?.authors ? bookDetails.authors[0].name : 'N/A'}</p> */}
                    <p>Date de publication: {bookDetails?.first_publish_date ? bookDetails.publish_date : 'N/A'}</p>
                    {/* <p>Description: {bookDetails.description ? bookDetails.description.value : 'N/A'}</p> */}
                </div>
            </div>
        </div>
        
     );
}
 
export default BookDetails;