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
import { createTicket } from "../controllers/ticket.controller.js";
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

router.get("/:cid/purchase", passportCall("jwt"), authorization("user"), )

router.post("/:cid/purchase",  createTicket)

export default router;
