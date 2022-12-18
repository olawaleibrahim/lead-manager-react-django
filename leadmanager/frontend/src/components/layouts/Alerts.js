import React, { Component, Fragment, useEffect, useRef } from 'react';
import { useAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const Alerts = (props) => {
    // componentDidMount() {
    //     this.props.alert.show("It Works!");
    // }

    const alert = useAlert();
    const mounted = useRef();

    useEffect(() => {
        console.log("WPRDED", props);
        if (!mounted.current) {
            mounted.current = true;
            alert.show("MOUNTED");
        } else {
            alert.show("UPDATED");
        }
    }, [0]);

    return (
        <Fragment />
    )
};

const mapStateToProps = state => ({
    error: state.errors.msg
})

export default connect(mapStateToProps)(Alerts);
