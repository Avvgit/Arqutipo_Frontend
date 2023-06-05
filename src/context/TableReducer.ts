import { type TableState, type RowData } from '../interfaces/Interfaces';

type TableAction =
|{ type: 'ADD_ROW', payload: RowData }

export const TableReducer = (state: TableState, action: TableAction): TableState => {

  switch (action.type) {
    case 'ADD_ROW':
      return {
          ...state,
          rows: [...state.rows, action.payload]
        }
    default:
      return state;
  }
}
