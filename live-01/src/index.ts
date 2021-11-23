import express, {Request, Response, NextFunction}from 'express';
// Express é um gerenciador de rotas via HTTP.

const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({foo: 'sucesso, atualizando a todo momento'});
});


app.listen(3000, () => {
  console.log('executando')
})