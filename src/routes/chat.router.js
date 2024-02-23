import { Router } from "express";
import { authorization, passportCall } from "../utils.js";

const router = Router();

router.get("/", passportCall("jwt"), authorization("user"),  renderChatLog);

router.post("/", passportCall("jwt"), authorization("user"), sendMessage);

export default router;
