import { HashRouter as Router, Routes, Route, Redirect } from "react-router-dom";

import React, { Component, Fragment } from "react";
import Header from "./layouts/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layouts/Alerts";
import PrivateRoute from "./common/PrivateRoute";
import Login from "./accounts/Login";
import Register from "./accounts/Register";

import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import store from "../store";
import { loadUser } from "../actions/auth";

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: "top center"
}

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            {/* <Alerts /> */}
                            <div className="container">
                                <Routes>
                                    <Route exact path="/" element={<PrivateRoute component={<Dashboard />} />} />
                                    {/* <PrivateRoute exact path="/" element={<Dashboard />} /> */}
                                    <Route exact path="/register" element={<Register />} />
                                    <Route exact path="/login" element={<Login />} />
                                </Routes>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider >
        )
    }
}

export default App;