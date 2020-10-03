import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navigation from "../component/Navigation";

import Main from "../container/pages/Main";

class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navigation />
                <Container>
                    <Switch>
                        <Route path="/" exact component={Main} />
                    </Switch>
                </Container>
            </BrowserRouter>
        );
    }
}

export default Home;
