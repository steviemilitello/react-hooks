import React from 'react'
import { Link } from 'react-router-dom'

// book form needs to have two inputs, a submit button, maybe a cancel button would be nice
// book form will use functions that are passed to it as props
// the book form will update state for its parent component

const BookForm = ({ book, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder="Some Book Title"
      value={book.title}
      name="title"
      onChange={handleChange}
    />
    <label>Author</label>
    <input
      placeholder="Some Author"
      value={book.author}
      name="author"
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default BookForm
