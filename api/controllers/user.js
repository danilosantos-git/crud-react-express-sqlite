import { db } from "../db.js";

export const getUsers = async (_, res) => {
  try {
    const data = await (await db).all("SELECT * FROM usuarios");
    return res.status(200).json(data);
  } catch (err) {
    return res.json(err);
  }
};

export const addUser = async (req, res) => {
  const q = "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?, ?, ?, ?)";
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  try {
    await (await db).run(q, values);
    return res.status(200).json("Usuário criado com sucesso.");
  } catch (err) {
    return res.json(err);
  }
};

export const updateUser = async (req, res) => {
  const q = "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  try {
    await (await db).run(q, [...values, req.params.id]);
    return res.status(200).json("Usuário atualizado com sucesso.");
  } catch (err) {
    return res.json(err);
  }
};

export const deleteUser = async (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  try {
    await (await db).run(q, [req.params.id]);
    return res.status(200).json("Usuário deletado com sucesso.");
  } catch (err) {
    return res.json(err);
  }
};