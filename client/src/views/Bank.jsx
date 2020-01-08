import React, { Component } from "react";
import PlaidLinkButton from "react-plaid-link-button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAccounts, addAccount } from "../actions/accountActions";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";
import Accounts from "./Accounts";
import Spinner from "./Spinner"; 


class Bank extends Component {
    componentDidMount() {
        this.props.getAccounts();
    }

    // Add account
    handleOnSuccess = (token, metadata) => {
        const plaidData = {
            public_token: token,
            metadata: metadata
        };
        this.props.addAccount(plaidData);
    };

    render() {
        const { user } = this.props.auth;
        const { accounts, accountsLoading } = this.props.plaid;

        let dashboardContent;

        if (accounts === null || accountsLoading) {
            dashboardContent = <Spinner />;
        } else if (accounts.length > 0) {
            // User has accounts linked
            dashboardContent = <Accounts user={user} accounts={accounts} />;
        } else {
            // User has no accounts linked
            dashboardContent = (
                <div className="content">
                    <Grid fluid>
                        <Row>
                            <Col md={12}>
                                <h4>
                                    <b>Welcome,</b> {user.name.split(" ")[0]}
                                </h4>
                                <p className="flow-text grey-text text-darken-1">
                                    To get started, link your first bank account below
                                </p>
                            <PlaidLinkButton
                                buttonProps={{
                                    className:
                                        "btn btn-large waves-effect waves-light hoverable blue accent-3 main-btn"
                                }}
                                plaidLinkProps={{
                                    clientName: "Family Ties",
                                    key: process.env.REACT_APP_PLAID_PUBLIC_KEY,
                                    env: "sandbox",
                                    product: ["transactions"],
                                    onSuccess: this.handleOnSuccess
                                }}
                                onScriptLoad={() => this.setState({ loaded: true })}
                            >
                                Link Account
              </PlaidLinkButton>
                                           </Col>
                    </Row>
                 </Grid>                       
                </div>
            );
        }

        return <div className="container">{dashboardContent}</div>;
    }
}

Bank.propTypes = {
    getAccounts: PropTypes.func.isRequired,
    addAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    plaid: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    plaid: state.plaid
});

export default connect(
    mapStateToProps,
    {getAccounts, addAccount }
)(Bank);
