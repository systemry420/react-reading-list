import React from 'react';
import './../index.css'

const BookDetails = ({book, removeBook}) => {
    return (
        <li onClick={()=> removeBook(book.id)}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
     );
}
 
export default BookDetails;