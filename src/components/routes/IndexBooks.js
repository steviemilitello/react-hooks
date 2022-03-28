// import react, and
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Layout from './../shared/Layout'

// imports needed for axios calls - axios itself, and our apiUrls
import axios from 'axios'
import apiUrl from './../../apiConfig'

// IndexBooks class component
class IndexBooks extends Component {
  // 2 required methods that we need for a class component
  // we need constructor and render methods
  // constructor method will allow us to set up state
  constructor () {
    // Super method is often required, allows us to override the things
    // that are already a part of the Component class, namely, to set up state
    super()
    // useFUL constructors have state
    // this.state is already predefined by React
    // but if we set up initial values here, we can customize this.state on a per component basis
    // in this case, our state will eventually hold an array of books that have been returned from the API request
    this.state = {
      // possible starting values
      // -we could use an empty array, like books: [],
      //  ^^^ not best practice, because we will eventually setState, and we want to overwrite our initial value
      // also, if our request returns an empty array of books,
      // we'll be able to better tell that the request was successful
      // null --> the desired explicit falsey value
      // undefined --> the implicit falsey value, so we never ever set anything initially as undefined
      // we need to handle three 'states' of our component
      // 1 - loading data still in progress (the request is still happening)
      // 2 - We've finished loading the data, and it's empty
      // 3 - We've finished loading the data and we have books to display
      books: null
    }
  }

  componentDidMount () {
    console.log('component did mount ran!')
    // this function runs at the end of the mounting stage
    // this is where we want to make HTTP requests
    // the response data, will not always look the same as other tools like $.ajax, or fetch
    // we want to start out by console logging that response before we do anything with it.
    axios(apiUrl + '/books')
      .then(res => {
        // res is a reference to the response object
        // res, as seen in the console log, has a 'data' key, which holds our 'books'
        // now, we can use that reference to setState and hold our books in state.
        this.setState({ books: res.data.books })
      })
      .catch(console.error)
  }
  // render method runs every time state is modified
  // this includes when the component 'mounts'
  // render, is technically, a lifecycle method
  render () {
    console.log('this is state in render', this.state)

    // define a temporary variable to hold JSX
    let booksJsx = ''
    // loading state
    // empty database state
    // what happens if there are a ton of books(which is what we want)
    // if there are no books, and the request has not been made, show that the page is loading
    // if the request has happened and there are still no books, show the user a message, tell them to add some books
    // if the request has been made and there ARE books, show the books.
    if (this.state.books === null) {
      booksJsx = (
        <p>Loading...</p>
      )
    } else if (this.state.books.length === 0) {
      booksJsx = (
        <p>No books to display! Go create some!</p>
      )
    } else {
      booksJsx = (
        <ul>
          {this.state.books.map(book => (
            <li key={book._id}>
              <Link to={`/books/${book._id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      )
    }

    return (
      <Layout>
        <h1>All the books!</h1>
        {booksJsx}
      </Layout>
    )
  }
}

// DO NOT FORGET TO EXPORT
export default IndexBooks
