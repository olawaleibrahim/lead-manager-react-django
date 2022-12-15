import React, { Component, Fragment } from "react";
import Header from "./layouts/Header";
import Dashboard from "./leads/Dashboard";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <Dashboard />
                </div>
            </Fragment>
        )
    }
}

export default App;