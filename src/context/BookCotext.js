import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: "Harry Potter", Author: "J. K. Rowling", id: 1},
        { title: "The Alchemist", Author: "Paulo Cuelho", id: 2},
    ])

    const addBook = (title, author) => {
        setBooks(
            [...books, { title, author, id: uuid() }]
        )
    }
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;