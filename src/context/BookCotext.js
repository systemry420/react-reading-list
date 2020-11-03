import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: "Harry Potter", author: "J. K. Rowling", id: 1},
        { title: "The Alchemist", author: "Paulo Cuelho", id: 2},
    ])

    const addBook = (title, author) => {
        setBooks(
            [...books, { title, author, id: uuid() }]
        )
    }

    const removeBook = (id) => {
        const filtered = books.filter(book => book.id !== id)
        setBooks(filtered)
    }
    return (
        <BookContext.Provider value={{books, removeBook, addBook}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;