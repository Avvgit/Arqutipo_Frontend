export interface ITicket { 
  rutTaker: string;
  numberReference: string;
  originDate: string;
  expirationDate: string;
  documentType: string;
  currency: string;
  amount: string;
  ticketStatus: string;
  id?: number;
}

export interface ITableState {
  rows: ITicket[];
}

export interface ITableContext{
  tableState: ITableState;
  dispatch: React.Dispatch<ITableActions>
}

export interface ITableActions {
  type: "ADD_ROW" | "DELETE_ROW" | "EDIT_ROW" | "GET_TICKETS";
  payload?: ITicket;
}


