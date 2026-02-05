import { Router } from "express";
import { createUser, getUsers, updateUser, partialUpdate, dltUser } from "../controller/user.controller.js";
import { checkAuth, validateUser ,createUserDTO,updateUserDTO} from "../middleware/auth.js";

const router = Router();
router.get("/", checkAuth , getUsers); 
router.post("/", createUserDTO, createUser);
router.put("/:id", updateUserDTO, updateUser);
router.patch("/:id", validateUser, partialUpdate);
router.delete("/:id", dltUser);

export default router;

