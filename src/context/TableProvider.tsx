import { useReducer } from "react";
import { TableReducer } from "./TableReducer";
import { TableContext } from "./TableContext";
import type { TableState } from "../interfaces/Interfaces";

const INITIAL_STATE: TableState = {
  rows: [],
};

type Props = {
  children: JSX.Element | JSX.Element[];
}

export const TableProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer( TableReducer, INITIAL_STATE );

  return (
    <TableContext.Provider value={{ state, dispatch }}>
      {children}
    </TableContext.Provider>
  )
};