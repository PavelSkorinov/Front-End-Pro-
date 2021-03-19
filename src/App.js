import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from './components/Header.js'
import Container from './components/Container.js'
import ArticleItem from './components/ArticleItem.js'

class App extends Component {

    render() {
        return (
            <div>
                <Header className="home"/>
                <Switch>
                    <Route exact path="/" className="container" component={Container}/>
                    <Route exect path="/article/:id" component={ArticleItem}/>
                </Switch>
            </div>
        );
    }
}
export default App;