import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index.js';
import { loginRoute } from './routes/auth/login.auth.route.js';

const app = express();

app.use(bodyParser.json({type: 'application/json'}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.post('/api/v1/login', (req, res) => {
//     console.log(req)
//     res.send(`Body: ${JSON.stringify(req.body)}`);
// });

loginRoute.forEach((router) => {
  app[router.method](
    `/api/v1/${router.path}`,
    router.validator ?? [],
    router.controller
  );
});

// All app routers
routes.forEach(router => {
    app[router.method](`/api/v1/${router.path}`, router.validator ?? [], router.controller);
});

export default app;
