export default class CartRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getAllCarts = () => {
    return this.dao.getAllCarts();
  };

  createCart = (cart) => {
    return this.dao.createCart(cart);
  };

  getCartById = (_id) => {
    return cartModel.getCartById(_id);
  };

  updateCart = (cid, cart) => {
    return cartModel.updateCart({ _id: cid }, cart);
  };

  deleteCart = (_id) => {
    return cartModel.deleteCart(_id);
  };

  deleteAllCarts = () => {
    return cartModel.deleteAllCarts();
  };

  getProductsFromCart = (cid) => {
    return cartModel
      .findOne({ _id: cid })
      .populate({
        path: "products.product",
        model: "products",
      })
      .exec();
  };
}
