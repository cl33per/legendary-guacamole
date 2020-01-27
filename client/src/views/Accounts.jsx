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
// Added for Material Table ICONS
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

class Accounts extends Component {
    componentDidMount() {
        const { accounts } = this.props;
        this.props.getTransactions(accounts);
        // this.props.getAccountBalance(accounts);
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
                    amount: "$"+transaction.amount
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
                                    icons={tableIcons}
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
    // getAccountBalance: PropTypes.func.isRequired,
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
