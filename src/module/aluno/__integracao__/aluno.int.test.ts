import request from "supertest";

describe("Int - Aluno Suite", () => {
  it("##GET /aluno", async () => {
    const response = await request("http://localhost:8080").get("/aluno");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
  });
  it("##POST /aluno", async () => {
    const response = await request("http://localhost:8080")
      .post("/aluno")
      .send({ nome: "Daniel Sato", cpf: "40593260811" });
    expect(response.status).toBe(201);
    expect(response.headers["content-type"]).toMatch(/json/);
  });
  it("##POST /aluno sem CPF", async () => {
    const response = await request("http://localhost:8080")
      .post("/aluno")
      .send({ nome: "Daniel Sato" });
    expect(response.status).toBe(400);
    expect(response.body.msg).toMatch("Nome e CPF são obrigatórios!");
  });
  it("##POST /aluno sem nome", async () => {
    const response = await request("http://localhost:8080")
      .post("/aluno")
      .send({ cpf: "40593260899" });
    expect(response.status).toBe(400);
    expect(response.body.msg).toMatch("Nome e CPF são obrigatórios!");
  });
  it("##POST /aluno cpf diferente 11 caracteres", async () => {
    const response = await request("http://localhost:8080")
      .post("/aluno")
      .send({ nome: "Daniel Sato", cpf: "405932608" });
    expect(response.status).toBe(400);
    expect(response.body.msg).toMatch("Formato de CPF inválido!");
  });
});
