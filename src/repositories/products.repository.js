import mongoose from "mongoose";

export default class ProductsRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getAllProducts = () => {
    console.log(this.dao)

    return this.dao.getAllProducts();
  };

  getProductById(_id) {
    const objectId = new mongoose.Types.ObjectId(_id);
    return this.dao.findById(objectId);
  }

  createProduct = (product) => {
    return this.dao.save(product);
  };

  updateProduct = (_id, product) => {
    const objectId = new mongoose.Types.ObjectId(_id);
    return this.dao.findByIdAndUpdate(objectId, product);
  };

  deleteProduct = (_id) => {
    const objectId = new mongoose.Types.ObjectId(_id);
    return this.dao.findByIdAndDelete(objectId);
  };
}
