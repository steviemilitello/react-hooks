import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/routes/Home'
// import IndexBooks
import IndexBooks from './components/routes/IndexBooks'
// import ShowBook
import ShowBook from './components/routes/ShowBook'
import UpdateBook from './components/routes/UpdateBook'
import CreateBook from './components/routes/CreateBook'

const App = () => (
  <React.Fragment>
    <Route exact path='/' component={Home}/>
    <Route exact path="/books" component={IndexBooks}/>
    <Route exact path="/books/:id" component={ShowBook}/>
    <Route exact path="/books/:id/edit" component={UpdateBook} />
    <Route exact path="/create-book" component={CreateBook}/>
  </React.Fragment>
)

export default App;
