import { ticketService } from "../services/service.js";
import TicketDTO from "../services/dao/DTOs/user.dto.js";

export async function getAllTickets(req, res) {
  try {
    let tickets = await ticketService.getAll();
    res.send(tickets);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: error, message: "No se pudo obtener los tickets." });
  }
}

export const createTicket = async (req, res) => {
  try {
    const { code, purchase_datetime, amount, purchaser } = req.body;
    const ticketDTO = new TicketDTO({ code, purchase_datetime, amount, purchaser });
    const createdTicket = await ticketService.createTicket(ticketDTO);
    res.status(201).json(createdTicket);
  } catch (error) {
    console.error("Error creating ticket:", error);
    res.status(500).json({ error: "Internal Server Error." });
  }
};