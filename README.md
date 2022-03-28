[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React CRUD

## Prerequisites

- [react-router](https://git.generalassemb.ly/ga-wdi-boston/react-router)

## Objectives

By the end of this, developers should be able to:

- Make HTTP requests to an API from within a React app using [axios](https://www.npmjs.com/package/axios):
  - (R)EAD resource collection.
  - (R)EAD specific resource.
  - (D)ELETE specific resource.
  - (U)PDATE specific resource.
  - (C)REATE new resource.

## Preparation

1. Fork and clone this repository. 
2. Create a new branch, `training`, for your work.
3. Checkout to the `training` branch.
4. Install dependencies with `npm install`.

## Book API

This project is meant to work along side [this book API](https://library-express-api.herokuapp.com)
to demonstrate creating a basic single page application in React that talks to an
Express API.

Navigate to [`/books`](https://library-express-api.herokuapp.com/books) in your
browser. You should see an object with a key `'books'` that points to an array
of book objects. We will use this book data throughout this lesson.

### Discussion: `react-template`

This repo comes from [create-react-app](https://facebook.github.io/create-react-app/),
which is a command line tool that lets you create new React projects out of thin air, with all the nececssary packages and configuration to get right to work.

The main features that this lesson has that are not included in `create-react-app`:

- `react-router v5`

## CRUD a Book

### Methodical Approach

1. Test API in browser (if possible)
1. Test API with cURL script
1. Add feature to react application
    1. Add route to `src/components/App.js`
    1. Create component to render for route
        1. Add component constructor
        1. Add component render
        1. Add component event
        1. Add component `axios` call

### Frontend and Backend Urls

When working with **axios** and **react router** it can occasionally be tricky to
tell which urls are to the front end and which urls are to the backend. Let's
discuss how we can differentiate between frontend and backend urls.

#### Frontend Urls

A `Route` component always defines which component a frontend url will show. For
example, in the following Route the `Books` component will be shown if we visit the
`/books` url.

```jsx
<Route exact path='/books' component={Books} />
```

To create a link to that frontend url, we will often use a `Link` or `NavLink`
component.

```jsx
<Link to='/books'>Books Page</Link>
<NavLink to='/books'>Books Page</NavLink>
```

> **Note:** `Link`, `NavLink`, and `Route` components are from **react router**.
> Anytime you see one of these components, then you are looking at a **frontend url**

#### Backend Urls

We will use `axios` to make requests to our backend API. Anytime we see `axios`
or `apiUrl` we are working with a **backend url**.

```jsx
axios(`${apiUrl}/books`)
```

### Code-along: (R)EAD books collection

- Browser
- cURL
- React

### Code along: (R)EAD specific book

- Browser
- cURL
- React

### Lab: (D)ELETE specific book

- cURL
- React

> Note: For delete, we want to send our users back to the list of books after
> we delete one. Research how to use the `Redirect` component from the
> `react-router-dom` package, and implement it in your `Book` component so our
> users go back to the `Books` component after successfully deleting a book.

### Code along: (U)PDATE specific book

- cURL
- React

*Hint: [Handling Multiple Inputs in React](https://reactjs.org/docs/forms.html#handling-multiple-inputs)*

#### Accessing `SyntheticEvent`s Asynchronously

React wraps the Browser's native `event` with something called a
[SyntheticEvent](https://reactjs.org/docs/events.html#event-pooling). This is
to improve cross-browser support. For performance reasons React reuses the
`SyntheticEvent` objects by pooling them and since it needs to be reused it will
nullify all the properties (such as `event.target`) after the callback has been
invoked.

So if we need to access the `event`'s properties asynchronously, for updating
state perhaps, we can use a method called `event.persist()`. This will:

> remove the synthetic event from the pool and allow references to the event to
> be retained by user code.

### Lab: (C)REATE new book

- cURL
- React

## Advanced React

### Code along: Refactoring

- Refactor forms into shared component
- Add footer using component composition
- Use `async` & `await` instead of promises

### Bonus Lab: `async` & `await`

Refactor the remaining CRUD functionality to use `async` and `await` instead
of Promise chains.

## Additional Resources

- [React FAQ AJAX](https://reactjs.org/docs/faq-ajax.html)
- [Axios](https://www.npmjs.com/package/axios)
- [Using Axios with React (10 min :movie_camera:)](https://www.youtube.com/watch?v=oQnojIyTXb8)
- [9 Things Every ReactJS Beginner Should Know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know)
- [Smart and Dumb Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [React AHA Moments](https://tylermcginnis.com/react-aha-moments/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
