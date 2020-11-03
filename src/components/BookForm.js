import React, {useContext, useState} from 'react';
import { BookContext } from '../context/BookCotext';
import './../index.css'

const BookForm = () => {
    const { addBook } = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault(); 
        addBook(title, author)
        setTitle('')
        setAuthor('')
    }

    return ( 
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input 
                required 
                placeholder="Enter book title" 
                name="title" 
                type="text" 
                value={title} 
                onChange={(e)=> setTitle(e.target.value)} 
                autoComplete="off"
                />
            <input 
                required 
                placeholder="Enter book author" 
                name="author" 
                type="text" 
                value={author} 
                onChange={(e)=> setAuthor(e.target.value)} 
                autoComplete="off"
            />
            <button>Add book</button>
        </form>
     );
}

export default BookForm;