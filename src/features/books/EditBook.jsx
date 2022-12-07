import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';


const EditBook = () => {
  const location = useLocation();

  const _id = location.state._id;
  const [ title, setTitle ] = useState(location.state.title);
  const [ author, setAuthor ] = useState(location.state.author);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();
    const book = { _id, title, author };

    dispatch(updateBook(book));
    navigate('/show-books', { replace: true })
  }

  return (
    <div>
        <h2>Edit Book</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-field'>
            <label htmlFor="title">Title: </label>
            <input 
              type="text" 
              id='title'
              name='title'
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-feild">
            <label htmlFor="author">Author: </label>
            <input 
              type="text" 
              id='author'
              name='author'
              value={author}
              onChange={(e)=> setAuthor(e.target.value)}
              required
            />
          </div>
          <button type='submit'>Update book</button>
        </form>
    </div>
  )
}

export default EditBook;