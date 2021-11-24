import express from 'express';
import errorHandler from './middleware/error-handler.middleware';
import authorizationRoute from './routes/authorizathion.route';
import statusRoutes from './routes/status.route';
// Express é um gerenciador de rotas de API REST.
import usersRouter from './routes/users.route';
import jwtAuthenticationMiddleware from './middleware/jwt-authentication.middleware';

const app = express();

//Configuração de aplicação
app.use(express.json()) //adicionando um  middle que é responsavel por interpretar o content/type. Nesse caso o JSON.
app.use(express.urlencoded({extended: true}));

//Configuração de rotas
app.use(statusRoutes)
app.use(authorizationRoute)
app.use(jwtAuthenticationMiddleware)
app.use(usersRouter)

//Configuração dos Handlers de Erro
app.use(errorHandler)

//inicialização do servidor
app.listen(3000, () => {
  console.log('executando na porta 3000')
})