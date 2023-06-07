import { createContext } from "react";
import { ITableContext } from "../interfaces/Interfaces";

export const TableContext = createContext<ITableContext>(
  {} as ITableContext
);
