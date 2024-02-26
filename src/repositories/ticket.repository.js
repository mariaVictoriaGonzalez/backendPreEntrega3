import TicketDTO from "../services/dao/DTOs/user.dto.js";

export default class TicketRepository {
  constructor(dao) {
    this.dao = dao;
  }
  getAll = async () => {
    return this.dao.getAll();
  };
  save = async (purchaser) => {
    let purchaserToInclude = new TicketDTO(purchaser);
    let result = await this.dao.create(purchaserToInclude);
    return result;
  };
}
