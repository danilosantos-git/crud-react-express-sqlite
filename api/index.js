import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";
import { db } from "./db.js";

const app = express();

app.use(express.json());
app.use(cors());

db.then(database => {
    return database.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      email TEXT,
      fone TEXT,
      data_nascimento TEXT
    )
  `);
}).catch(err => console.error(err));

app.use("/", userRoutes);

app.listen(8800, () => {
    console.log("Servidor rodando na porta 8800");
});