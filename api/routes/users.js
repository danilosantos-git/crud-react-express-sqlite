import { Router } from "express";
import { db } from "../db.js";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user.js";

const router = Router();

router.get("/", getUsers);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;