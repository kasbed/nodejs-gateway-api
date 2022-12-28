import express, { Express } from "express"
import cors from "cors"
import { setupLogging } from "./logging/logging"
import { routes } from "./routes/routes"
import { setupProxy } from "./proxy/proxy"
import { setupAuth } from "./auth/auth"

const app: Express = express()

const PORT: string | number = process.env.PORT || 3000

app.use(cors());
setupLogging(app);
setupAuth(app, routes);
setupProxy(app, routes);

app.listen(PORT, () :void => {
  console.log(`Server listening on port ${PORT}`)
});