import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Counter from './components/counter'
import Todo  from './components/todo'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/counter" component={Counter} />
                    <Route exact path="/todo" component={Todo} />
                </div>
            </Router>
        )
    }
}

export default Routers;