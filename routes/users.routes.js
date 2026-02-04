import { Router } from "express";
import { createUser, dltUser, getUsers, updateUser } from "../controller/user.controller.js";

const router = Router();
router.get("/", getUsers); 
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", dltUser);


export default router;
