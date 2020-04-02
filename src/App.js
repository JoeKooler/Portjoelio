import React, { Component } from 'react'
import NavBar from './Components/Navbar'
import RouterComponent from './Components/RouterComponent'
import { BrowserRouter } from "react-router-dom"

import './styles/app.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <NavBar />
                    <RouterComponent />
                </BrowserRouter>
            </div>
        )
    }
}
