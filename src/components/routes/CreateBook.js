// i need react, component, going to need api/axios stuff, might want to redirect
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Layout from './../shared/Layout'
import BookForm from './../shared/BookForm'

// http stuff
import axios from 'axios'
import apiUrl from './../../apiConfig'

// inherit from the component class
class CreateBook extends Component {
  constructor () {
    super()

    this.state = {
      book: {
        title: '',
        author: ''
      },
      createdId: null
      // we could also set this to false, but that's not really as helpful
      // because we're not updating this piece of state with a boolean
    }
  }

  handleChange = (event) => {
    event.persist()
    this.setState((prevState) => {
      const name = event.target.name
      const value = event.target.value
      const updatedValue = { [name]: value }
      return { book: { ...prevState.book, ...updatedValue } }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios({
      method: 'POST',
      url: `${apiUrl}/books`,
      data: { book: this.state.book }
    })
      .then((res) => {
        console.log(res)
        this.setState({ createdId: res.data.book._id })
      })
      .catch(console.error)
  }

  // <form onSubmit={this.handleSubmit}>
  // <input
  // name="title"
  // value={this.state.book.title}
  // onChange={this.handleChange}
  // />
  // <input
  // name="author"
  // value={this.state.book.author}
  // onChange={this.handleChange}
  // />
  // <button type="submit">Create Book</button>
  // </form>

  render () {
    const { book, createdId } = this.state
    const { handleChange, handleSubmit } = this

    if (createdId) {
      return <Redirect to={`/books/${createdId}`} />
    }
    return (
      <Layout>
        <BookForm
          book={book}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          cancelPath={'/books'}
        />
      </Layout>
    )
  }
}

export default CreateBook
