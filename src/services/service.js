import TicketServiceDao from "./dao/tickets.dao.js";

import TicketRepository from "../repositories/ticket.repository.js";

const ticketDao = TicketServiceDao();

export const ticketService = TicketRepository(ticketDao);
