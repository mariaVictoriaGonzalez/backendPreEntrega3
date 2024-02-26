import ticketService from "../services/service.js";
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

export async function saveTicket(req, res) {
  try {
    const ticketDTO = new TicketDTO(req.body);
    let result = await ticketService.save(ticketDTO);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: error, message: "No se pudo guardar el ticket." });
  }
}
