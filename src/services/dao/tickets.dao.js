import ticketModel from "../models/ticket.model";

export default class TicketServiceDao {
    constructor() {
        console.log("Working ticket with Database persistence in mongodb");
    }

    getAllTickets = async () => {
        let ticket = await ticketModel.find();
        return ticket.map(ticket => ticket.toObject());
    }
    saveTicket = async (ticket) => {
        let result = await ticketModel.create(ticket);
        return result;
    }

    findTicketByUsername = async (username) => {
        const result = await ticketModel.findOne({ email: username });
        return result;
    };

    updateTicket = async (filter, value) => {
        console.log("Update ticket with filter and value:");
        console.log(filter);
        console.log(value);
        let result = await ticketModel.updateOne(filter, value);
        return result;
    }
}