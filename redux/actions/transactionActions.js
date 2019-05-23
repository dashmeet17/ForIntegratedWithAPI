import { FETCH_TRANSACTIONS, TRANSFER_TRANSACTION} from './types';
import axios from 'axios'

export const fetchTransactions = () => dispatch => {
   console.log('fetching transactions');
    axios.get(`http://localhost:8080/customer-transactions`)
        .then(res => {
          dispatch({
            type : FETCH_TRANSACTIONS,
            payload : res.data
          })

        }).catch(function (error) {
          console.log(error);
        });
}

export const transferTransaction = (trxnData) => dispatch => {
   console.log('transferring transaction');
   debugger;
   axios.post('http://localhost:8080/add-transaction', trxnData)
        .then(function (response) {
              console.log(response);
              debugger;
              //TODO - Call API to save the trxn in db and return the payload accordingly
              dispatch({
                type : TRANSFER_TRANSACTION,
                payload : response
              })
          })
          .catch(function (error) {
              console.log(error);
          });
}
