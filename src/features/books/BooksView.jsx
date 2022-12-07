import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteBook } from './BooksSlice';

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);

  const dispatch = useDispatch();

  const handleDeleteBook = _id => {
    dispatch(deleteBook(_id))
  }

  return (
    <div>
        <h2>List of Books</h2>
        <table>
          <thead>
            <tr>
              {/* <td>Id</td> */}
              <td>Title</td>
              <td>Author</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {books && books.map(book =>(
              <tr key={book._id} id={book._id}>
                {/* <td>{book._id}</td> */}
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <Link to='/edit-book' state={{_id: book._id, title: book.title, author: book.author}}><button>Edit</button></Link>
                  <button onClick={() =>{handleDeleteBook(book._id)}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default BooksView