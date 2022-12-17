import React, { Component, Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getLeads } from '../../actions/leads';

export const Leads = (props) => {

    useEffect(() => {
        props.getLeads();
    }, [0]);

    return (
        <Fragment>
            <h2>Leads</h2>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {props.leads.map(lead => (
                        <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.message}</td>
                            <td><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )

};

const mapStateToProps = (state) => ({
    leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads })(Leads);
