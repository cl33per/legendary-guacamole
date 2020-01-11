import React, { Component } from "react";
import PropTypes from "prop-types";
import PlaidLinkButton from "react-plaid-link-button";
import { connect } from "react-redux";
import {
    getTransactions,
    addAccount,
    deleteAccount,
    getAccountBalance
} from "../actions/accountActions";
import { logoutUser } from "../actions/authActions";
import MaterialTable from "material-table"; // https://mbrn.github.io/material-table/#/
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";

class Accounts extends Component {
    componentDidMount() {
        const { accounts } = this.props;
        this.props.getTransactions(accounts);
        this.props.getAccountBalance(accounts);
    }
    
    // Add account
    handleOnSuccess = (token, metadata) => {
        const { accounts } = this.props;
        const plaidData = {
            public_token: token,
            metadata: metadata,
            accounts: accounts
        };
        this.props.addAccount(plaidData);
    };

    // Delete account
    onDeleteClick = id => {
        const { accounts } = this.props;
        const accountData = {
            id: id,
            accounts: accounts
        };
        this.props.deleteAccount(accountData);
    };


    render() {
        const { user, accounts } = this.props;
        const { transactions, transactionsLoading } = this.props.plaid;

        let accountItems = accounts.map(account => (
            <li className="accounts-list" key={account._id} style={{ marginTop: "1rem" }}>
                <button
                    style={{ marginRight: "1rem" }}
                    onClick={this.onDeleteClick.bind(this, account._id)}
                    className="btn btn-small btn-floating waves-effect waves-light hoverable red accent-3"
                >
                    <i className="fa fa-eraser"></i>
                </button>
                <b>{account.institutionName}</b>
            </li>
        ));

        // Setting up data table
        const transactionsColumns = [
            { title: "Account", field: "account" },
            { title: "Date", field: "date", type: "date", defaultSort: "desc" },
            { title: "Name", field: "name" },
            { title: "Amount", field: "amount", type: "numeric" },
            { title: "Category", field: "category" }
        ];

        let transactionsData = [];
        transactions.forEach(function (account) {
            account.transactions.forEach(function (transaction) {
                transactionsData.push({
                    account: account.accountName,
                    date: transaction.date,
                    category: transaction.category[0],
                    name: transaction.name,
                    amount: transaction.amount
                });
            });
        });

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                    <h4><b>Welcome!</b></h4>
                    <p className="grey-text text-darken-1"> Hey there, {user.name.split(" ")[0]} </p>
                    <h5><b>Linked Accounts</b></h5>
                    <p className="grey-text text-darken-1"> Add or remove your bank accounts below</p>
                    <ul>{accountItems}
                    <PlaidLinkButton
                        buttonProps={{
                            className:
                            "btn btn-large waves-effect waves-light hoverable blue accent-3 main-btn accounts-add-account"
                        }}
                        plaidLinkProps={{
                            clientName: "YOUR_APP_NAME",
                            key: "c0bef89553dcc2745bf68272e31e66",
                            env: "sandbox",
                            product: ["transactions"],
                            onSuccess: this.handleOnSuccess
                        }}
                        onScriptLoad={() => this.setState({ loaded: true })}
                    >Add Account
                    </PlaidLinkButton></ul>
                    <hr style={{ marginTop: "2rem", opacity: ".2" }} />
                    <h5><b>Transactions</b></h5>
                    {transactionsLoading ? 
                    (<p className="grey-text text-darken-1">Fetching transactions...</p>) : 
                    ( <> <p className="grey-text text-darken-1">You have <b>{transactionsData.length}</b> transactions from your <b> {accounts.length}</b> 
                    linked {accounts.length > 1 ? ( <span> accounts </span>) : (<span> account </span>)}from the past 30 days</p>
                                <MaterialTable
                                    columns={transactionsColumns}
                                    data={transactionsData}
                                    title="Search Transactions"
                                />
                            </>
                        )}
                        </Col>
                    </Row>
                </Grid> 
            </div>
        );
    }
}

Accounts.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    getTransactions: PropTypes.func.isRequired,
    getAccountBalance: PropTypes.func.isRequired,
    addAccount: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    accounts: PropTypes.array.isRequired,
    plaid: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    plaid: state.plaid
});

export default connect(
    mapStateToProps,
    { logoutUser, getTransactions, getAccountBalance, addAccount, deleteAccount }
)(Accounts);
