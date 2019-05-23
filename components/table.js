import React from 'react'
import '../css/table.css'
import ReactTable from 'react-table'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux' // connects component to redux store provided by provider
import { fetchTransactions } from '../redux/actions/transactionActions.js'

const columns = [
  {
    Header: 'Transaction ID',
    accessor: 'transactionID'
  },
  {
    Header: 'User Name',
    accessor: 'username'
  },
  {
    Header: 'Payment Mode',
    accessor: 'paymentMode'
  },
  {
    Header: 'Amount',
    accessor: 'amount'
  }
]

class Table extends React.Component {
  componentWillMount() {
    var data = this.props.fetchTransactions();
    this.setState({ transactions: data });
  }

  render () {
    return (
      <ReactTable
        className="container jumbotron trxnTable table-bordered"
        data={this.props.transactions}
        columns={columns}
        defaultPageSize={10}
      />
    )
  }
}

Table.propTypes = {
  fetchTransactions : PropTypes.func.isRequired,
  transactions : PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  transactions : state.transactions.data
})

export default connect(mapStateToProps, {fetchTransactions})(Table)
