export default class UsersRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getUserByEmail = (email) => {
    return this.dao.getUserByEmail({ email });
  };

  save = (user) => {
    return this.dao.create(user);
  };
}
