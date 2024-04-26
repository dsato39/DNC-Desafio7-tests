import express, { Request, Response } from "express";
import * as alunoModel from "./aluno.model";

const router = express.Router();

router.get("/", async (_, res: Response) => {
  const data = await alunoModel.getAll();
  return res.status(200).json({ data });
});

router.post("/", async (req: Request, res: Response) => {
  // let cpfLength = req.body.cpf.length;
  if (!req.body.nome || !req.body.cpf) {
    return res.status(400).json({ msg: "Nome e CPF são obrigatórios!" });
  } else if (req.body.cpf.length != 11) {
    return res.status(400).json({ msg: "Formato de CPF inválido!" });
  } else {
    const data = await alunoModel.store(req.body);
    return res.status(201).json({ data });
  }
});

export default router;
