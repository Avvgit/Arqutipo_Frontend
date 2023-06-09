import { ITableActions } from './../interfaces/Interfaces';
import { type ITableState, type ITicket } from '../interfaces/Interfaces';

// type ITableActions =
// |{ type: 'ADD_ROW', payload: ITicket }

export const TableReducer = (state: ITableState, action: ITableActions): ITableState => {

  switch (action.type) {
    case 'ADD_ROW':
      return {
          ...state,
          rows: [ ...state.rows, action.payload ] as ITicket[]
        }
    default:
      return state;
  }
}
