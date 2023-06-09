import { ITicket } from "../interfaces/Interfaces";

export const getTicketsAction = () => {
  return {
    type: "GET_TICKETS",
  };
}


export const addRowAction = (ticket: ITicket) => {
  return {
    type: "ADD_ROW",
    payload: ticket
  };
}

// export const actionCreator = (dispatch: React.Dispatch<any>) => {
//   return async (dispatch) => {
//     try {
//       // inicializar animacon
//       // instancia de servicio ticket
//       const getTickets = await getTicketsFecade();
//       // dispatch(getTicketsAction(getTickets));
//     } catch (error) {
//       // dispatch error
//     }

//   }

// }


dispatch(getTicketsAction())