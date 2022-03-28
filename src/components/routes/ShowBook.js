import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import Layout from './../shared/Layout'

import axios from 'axios'
import apiUrl from './../../apiConfig'

class ShowBook extends Component {
  // 2 very important methods
  constructor () {
    super()

    this.state = {
      book: null,
      deleted: false
    }
  }

  componentDidMount () {
    // Show request to /books/:id
    // we need to get the id from the front-end url
    // We can do that, by destructuring the id from our match params(which come from Router)
    const { id } = this.props.match.params
    // check that your variables are referring to the right info with a console log
    // console.log('this is the id --> componentDidMount \n', id)
    axios(`${apiUrl}/books/${id}`)
      .then(res => {
        this.setState({ book: res.data.book })
      })
      .catch(console.error)
  }

  destroyBook = (event) => {
    // make our axios call
    // axios({
    //   method: 'Delete',
    //   url: `${apiUrl}/books/${this.props.match.params.id}`
    // })
    axios.delete(`${apiUrl}/books/${this.props.match.params.id}`)
      .then(res => {
      // because I want to redirect if the book has been deleted
      // I want to setState for deleted to true(see render function for the reason why)
        this.setState({ deleted: true })
      })
      .catch(console.error)
  }

  render () {
    // first step, we want to save ourselves some time, and finger muscle ability by destructuring from state
    const { book, deleted } = this.state
    // handle what happens the first render, where there is no book
    // handle what happens when the request is still loading/waiting for a response, or if that response is empty
    // handle what happens when I get the desired book back
    if (!book) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return <Redirect to="/books"/>
    }

    return (
      <Layout>
        <h3>{book.title}</h3>
        <p>Written by: {book.author}</p>
        <button onClick={this.destroyBook}>Delete the Book</button>
        <Link to={`/books/${this.props.match.params.id}/edit`}>Update This Book!</Link>
      </Layout>
    )
  }
}

export default ShowBook
