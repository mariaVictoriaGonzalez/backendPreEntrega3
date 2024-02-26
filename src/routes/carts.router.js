import { Router } from "express";
import {
  getNewCart,
  renderCart,
  getCartById,
  deleteCartById,
  deleteProductFromCart,
  addProductToCart,
  modifyProductQuantityToCart,
  modifyProductOnCart,
} from "../controllers/carts.controller.js";
import { authorization, passportCall } from "../utils.js";

const router = Router();

router.post("/", passportCall("jwt"), authorization("user"), getNewCart);

router.get("/", renderCart);

router.get("/:cid", getCartById);

router.delete("/:cid", deleteCartById);

router.delete("/:cid/products/:pid", passportCall("jwt"), authorization("user"), deleteProductFromCart);

router.post("/:cid/products/:pid", passportCall("jwt"), authorization("user"), addProductToCart);

router.put("/:cid", passportCall("jwt"), authorization("user"), modifyProductQuantityToCart);

router.put("/:cid/products/:pid", passportCall("jwt"), authorization("user"), modifyProductOnCart);

router.post("/:cid/purchase", passportCall, passportCall("jwt"), authorization("user"), )

export default router;
