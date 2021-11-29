/**
 * Entry point for the Express API Server
 */

import express, { RequestHandler } from 'express';
import cors from 'cors';
import swaggerUi, { SwaggerUiOptions } from 'swagger-ui-express';
import { createConnection } from 'typeorm';

import { RegisterRoutes } from './routes'; // Auto-generate w/ tsoa routes
import env, { isDev } from './env';
import errorHandler from './middleware/errorHandler';
import notFoundHandler from './middleware/notfoundHandler';

const app = express();
const PORT = 8000;
const startup = () => app.listen(PORT, () => {
  if (isDev) console.log(`Express API is running at http://localhost:${PORT}`);
})

const welcome: RequestHandler = (req:express.Request, res:express.Response) => {
  let msg = 'Welcome';
  if (isDev) msg += '. View docs at /swagger';
  res.send({msg: msg})
}

const swaggerOpts: SwaggerUiOptions = {
  swaggerOptions: {
    url: "/swagger.json"
  }
}

app.use(cors({
  origin: env.cors
}))
app.use(express.json());
app.use(express.static("public"));
app.get("/", welcome);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(undefined, swaggerOpts));

RegisterRoutes(app);

app.use(notFoundHandler);
app.use(errorHandler);

createConnection().then(() => startup())