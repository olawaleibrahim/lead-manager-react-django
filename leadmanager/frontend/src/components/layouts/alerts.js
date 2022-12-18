import React, { Component, Fragment, useEffect } from 'react';
import { useAlert } from "react-alert";

export const Alerts = () => {
    // componentDidMount() {
    //     this.props.alert.show("It Works!");
    // }

    const alert = useAlert();

    useEffect(() => {
        console.log("WPRDED")
        alert.show("It works");
    }, [0]);

    return (
        <Fragment />
    )
}

export default Alerts;
