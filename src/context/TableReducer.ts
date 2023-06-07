import { ITableActions } from './../interfaces/Interfaces';
import { type ITableState, type IRowData } from '../interfaces/Interfaces';

// type ITableActions =
// |{ type: 'ADD_ROW', payload: IRowData }

export const TableReducer = (state: ITableState, action: ITableActions): ITableState => {

  switch (action.type) {
    case 'ADD_ROW':
      return {
          ...state,
          rows: [ ...state.rows, action.payload ] as IRowData[]
        }
    default:
      return state;
  }
}
