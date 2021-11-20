/**
 * Entry point for the Express API Server
 */

import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { createConnection } from 'typeorm';
import { RegisterRoutes } from './routes'; // Auto-generate w/ tsoa routes
import { environment } from './_environments/environment';

const app = express();
const PORT = 8000;
const startup = () => app.listen(PORT, () => {
  if (environment.name === 'dev') console.log(`Express API is running at http://localhost:${PORT}`);
})

app.use(cors({
  origin: environment.cors
}))
app.use(express.json());
app.use(express.static("public"));

app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

RegisterRoutes(app);

createConnection().then(() => startup())