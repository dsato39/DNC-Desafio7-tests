import express from "express";
import alunoRoute from "./src/module/aluno/aluno.route";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use("/aluno", alunoRoute);

app.listen(8080, () => {
  console.log("server running!");
});
