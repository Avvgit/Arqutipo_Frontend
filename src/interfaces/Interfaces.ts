export interface RowData { 
  rutTaker: string;
  numberReference: string;
  originDate: string;
  expirationDate: string;
  documentType: string;
  currency: string;
  amount: string;
  ticketStatus: string;
}

export interface TableState {
  rows: RowData[];
}


