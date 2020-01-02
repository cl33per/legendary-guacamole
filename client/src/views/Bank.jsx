import React, { Component } from 'react'
import PlaidLink from 'react-plaid-link'

export default class Bank extends Component {
    handleOnSuccess(token, metadata) {
        // send token to client server
    }
    handleOnExit() {
        // handle the case when your user exits Link
    }
    render() {
        return (
            <PlaidLink
                clientName="Fmaily Ties"
                env="development"
                product={["auth", "transactions"]}
                publicKey={process.env.REACT_APP_PUBLIC_KEY}
                onExit={this.handleOnExit}
                onSuccess={this.handleOnSuccess}>
                Open Link and connect your bank!
      </PlaidLink>
        )
    }
}