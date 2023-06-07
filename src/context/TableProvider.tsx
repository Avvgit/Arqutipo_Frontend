import { useReducer } from "react";
import { TableReducer } from "./TableReducer";
import { TableContext } from "./TableContext";
import type { ITableActions, ITableState } from "../interfaces/Interfaces";

const INITIAL_STATE: ITableState = {
  rows: [ {
    rutTaker: '76.727.343-7',
    numberReference: '110614',
    originDate: '2023/04/01',
    expirationDate: '2023/04/18',
    documentType: 'Pagadera a la vista',
    currency: 'CLP',
    amount: '16.533.188,00',
    ticketStatus: 'Impresa',
    id: 1,
  },
  {
    rutTaker: '68.327.643-1',
    numberReference: '770614',
    originDate: '2023-04-01',
    expirationDate: '2023-04-18',
    documentType: 'Pagadera a la vista',
    currency: 'UF',
    amount: '92.533.188,00',
    ticketStatus: 'Impresa',
    id: 2,
  },
],
};

type Props = {
  children: JSX.Element | JSX.Element[];
}

export const TableProvider: React.FC<Props> = ({ children }) => {
  const [tableState, dispatch] = useReducer< React.Reducer< ITableState, ITableActions > >( TableReducer, INITIAL_STATE );

  return (
    <TableContext.Provider value={{ tableState, dispatch }}>
      {children}
    </TableContext.Provider>
  )
};