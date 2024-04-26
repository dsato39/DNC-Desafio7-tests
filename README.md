
# Desafio 7 DNC

Etapas do desafio:
1) Migração de Java Script para Typescript
2) Configuração do Jest
3) Teste de integração
4) Repositório em JS




## Documentação da API

#### Retorna todos os itens

```http
  GET /aluno
```

#### Registro de aluno

```http
  POST /aluno
```

Registra um aluno com nome e CPF, ambos obrigatórios. O CPF deve ser apenas os números e precisa ser uma string de 11 dígitos.
## Variáveis de Ambiente

É necessário utilizar o MySQL, o query builder utilizado é o Knex (o arquivo de configuração esta na pasta /src/config).

## Rodando os testes

Para rodar os testes, rode os seguintes comandos

```bash
  npm start
  npm test
```

