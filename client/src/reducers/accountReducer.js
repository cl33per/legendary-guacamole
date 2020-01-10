import {
    ADD_ACCOUNT,
    DELETE_ACCOUNT,
    GET_ACCOUNTS,
    ACCOUNTS_LOADING,
    GET_TRANSACTIONS,
    TRANSACTIONS_LOADING,
    GET_ACCOUNTS_BALANCE,
    BALANCE_LOADING
} from "../actions/types";

const initialState = {
    accounts: [],
    transactions: [],
    accountsLoading: false,
    transactionsLoading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACCOUNTS_LOADING:
            return {
                ...state,
                accountsLoading: true
            };
        case ADD_ACCOUNT:
            return {
                ...state,
                accounts: [action.payload, ...state.accounts]
            };
        case DELETE_ACCOUNT:
            return {
                ...state,
                accounts: state.accounts.filter(
                    account => account._id !== action.payload
                )
            };
        case GET_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload,
                accountsLoading: false
            };
        case TRANSACTIONS_LOADING:
            return {
                ...state,
                transactionsLoading: true
            };
        case GET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload,
                transactionsLoading: false
            };
        case GET_ACCOUNTS_BALANCE:
            return {
                ...state,
                balance: action.payload,
                balanaceLoading: false
            };
        case BALANCE_LOADING:
            return {
                ...state,
                balanaceLoading: true
            };
        default:
            return state;
    }
}
