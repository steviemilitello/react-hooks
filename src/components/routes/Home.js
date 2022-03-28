// home has nav, footer and state that changes component view. 
import React, { Component } from 'react'
import Layout from '../shared/Layout'

// page state has function that will change to books, new or update based on what is clicked in the nav
export default class Home extends Component {
    render () {
        return (
            <Layout>
                <h4>Welcome! Let's Learn to CRUD</h4>
            </Layout>
        )
    }
}