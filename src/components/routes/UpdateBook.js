import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Layout from './../shared/Layout'
import BookForm from './../shared/BookForm'

// imports for HTTP requests
import axios from 'axios'
import apiUrl from './../../apiConfig'

// inheriting from the component class
class UpdateBook extends Component {
  // 2 methods
  constructor () {
    super()
    // we need two inputs for the book, title, and author
    // when I enter data into an input, it should setState for that input's [name]
    // I want to pass the state.book info to a patch axios call
    // if that is successful, I want to redirect to the book's show page
    // otherwise I want to see the error
    this.state = {
      book: {
        title: '',
        author: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data.book }))
      .catch(console.error)
  }

  handleChange = (event) => {
    // this is a synthetic event
    // Synthetic events have their target and other values 'nullified' in a callback
    // event.persist will stop the synthetic event properties from being set to null
    event.persist()
    // while the user is typing, we set state with what they're typing into our inputs
    this.setState(prevState => {
      // const { name, value } = event.target
      const name = event.target.name
      const value = event.target.value
      // we're going to use the spread operator, which spreads stuff out
      // spreads data out of data structures
      // ...[1, 2, 3] => 1, 2, 3
      // ...{ title: 'hello', author: 'someone' } => title: 'hello', author: 'someone'
      const updatedValue = { [name]: value }
      // console.log('the user is typing this \n', updatedValue)
      // as the user types, it might look like this:
      // title: 'h' title: 'he' title: 'hel' ...so on until they get to title: 'hello'
      // we want to return from this function, the new book as it should be
      return { book: { ...prevState.book, ...updatedValue } }
    })
  }

  handleSubmit = (event) => {
    // we want to prevent a refresh on submit of our form
    event.preventDefault()

    axios({
      method: 'PATCH',
      url: `${apiUrl}/books/${this.props.match.params.id}`,
      data: { book: this.state.book }
    })
      .then(() => {
        this.setState({ updated: true })
      })
      .catch(console.error)
  }

  render () {
    const { book, updated } = this.state
    const { handleChange, handleSubmit } = this
    if (updated) {
      return <Redirect to={`/books/${this.props.match.params.id}`}/>
    }
    return (
      <Layout>
        <BookForm
          book={book}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          cancelPath={`/books/${this.props.match.params.id}`}
        />
      </Layout>
    )
  }
}

export default UpdateBook
