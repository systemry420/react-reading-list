import React, { useContext } from 'react';
import { BookContext } from '../context/BookCotext';
import BookDetails from './BookDetails'

const BookList = () => {
    const { books } = useContext(BookContext)
    
    return ( 
        <div className="book-list">
            {books.map( book => {
                return (
                    <BookDetails books={books} key={book.id} />
                )
            })}
        </div>
     );
}
 
export default BookList;