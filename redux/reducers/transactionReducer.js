import { FETCH_TRANSACTIONS, TRANSFER_TRANSACTION} from '../actions/types';

const initialState = {
  data : []
}

export default function(state = initialState, action) {

  switch(action.type) {
    case FETCH_TRANSACTIONS :
      console.log('FETCH_TRANSACTIONS inside reducer called');
      return {
        ...state,
        data : action.payload
      };
    case TRANSFER_TRANSACTION :
      console.log('TRANSFER_TRANSACTION inside reducer called');
      return {
        ...state,
        item : action.payload
      };
    default :
      return state;
  }

}
