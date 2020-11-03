import React, { useContext } from 'react';
import { BookContext } from '../context/BookCotext';
import BookDetails from './BookDetails'
import './../index.css'

const BookList = () => {
    const { books, removeBook } = useContext(BookContext)
    
    return books.length === 0 ? (
        <div className="empty">
            <h3>You don't have books to read right now!</h3>
        </div>
    )
    :(
        <ul className="book-list">
            {books.map( book => {
                return (
                    <BookDetails removeBook={removeBook} book={book} key={book.id} />
                )
            })}
        </ul>
     );
}
 
export default BookList;