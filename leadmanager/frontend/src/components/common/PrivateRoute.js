import React, { Component, Fragment } from 'react';
import { Routes, Route, redirect, Redirect, Navigate, Outlet } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Dashboard from '../leads/Dashboard';

// const PrivateRoute = ({ component: Component, auth, ...rest }) => {
//     console.log(Component);
//     if (auth.isLoading) {
//         return <h2>Loading...</h2>
//     } else if (!auth.isAuthenticated) {
//         console.log("222222", auth);
//         return <Redirect to="/login" />;
//         // return redirect("/login");
//     } else {
//         console.log("11111", auth);
//         return <Component {...props} />;
//     }
// };

const PrivateRoute = ({ component, auth }) => {
    if (auth.isLoading) {
        return <h2>Loading...</h2>
    } else if (!auth.isLoading) {
        return !auth.isAuthenticated ?
            <div>
                {component}
                <Outlet />
            </div>
            :
            <Navigate to="/login" />
    }
};

// const PrivateRoute = ({ children, auth, ...rest }) => (
//     <Routes>
//         <Route
//             {...rest}
//             render={props => {
//                 if (!auth.isLoading) {
//                     return <h2>Loading...</h2>
//                 } else if (!auth.isAuthenticated) {
//                     console.log("{...rest}", { ...rest })
//                     return <Navigate to="/login" />;
//                 } else {
//                     console.log("props", props);
//                     console.log("{...rest}", { ...rest })
//                     return <h1>HELOOOO</h1>;
//                 }
//             }}
//         />
//     </Routes>
// );

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute);
