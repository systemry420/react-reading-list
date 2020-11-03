import React, { useContext } from 'react';
import { BookContext } from '../context/BookCotext';
import BookDetails from './BookDetails'
import './../index.css'

const BookList = () => {
    const { books } = useContext(BookContext)
    
    return (
        <ul className="book-list">
            {books.map( book => {
                return (
                    <BookDetails book={book} key={book.id} />
                )
            })}
        </ul>
     );
}
 
export default BookList;