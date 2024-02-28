import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get("https://openlibrary.org/subjects/thriller.json?limit=100")
          .then((response) => {
            const works = response.data.works;
            setBooks(works);
        }).catch(error => console.error(error))
    }, [])
    return ( 
        <div className="card-container">
        {books &&
          books.map((book) => (
            <div key={book.key} className="card">
              <Link to={`${book.key}`}>
                <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} alt={book.title} />
                <p>{book.title}</p>
              </Link>
            </div>
          ))}
      </div>
     );
}
 
export default BookList;