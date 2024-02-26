export default class ChatRepository {
    constructor(dao) {
        this.dao = dao;
    }
    getAll = () => {
        return this.dao.getAll();
    }
    save = (cart) => {
        return this.dao.save(mesg);
    }
};