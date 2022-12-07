const { createSlice } = require("@reduxjs/toolkit");
const {v4: uuidv4} =  require('uuid');

const initialBooks = {
    books: [
        {_id: uuidv4(), title: 'My crush Fatema', author: 'Md Muaz Ahmed'},
        {_id: uuidv4(), title: 'May be I am fallen in love', author: 'Md Muaz Ahmed'}
    ]
}
const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(book => book._id !== action.payload);
        },
        updateBook: (state, action) => {
            const isBookExisted = state.books.filter(book => book._id === action.payload._id);
            if(isBookExisted) {
                isBookExisted[0].title = action.payload.title;
                isBookExisted[0].author = action.payload.author;
            }
        }
    }
})

export const { showBooks, addBook, deleteBook, updateBook } = booksSlice.actions;

export default booksSlice.reducer;