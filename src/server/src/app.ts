import express from "express";
import { setupSwagger } from "./docs/swagger";
import userRoutes from "./modules/user/user.routes";

export const createApp = async () => {
  
  // Initialize Express app
  const app = express();
  setupSwagger(app);

  app.use(express.json());


  app.get("/", (req, res) => {
    res.json({ message: "Server is running 🚀" });
  });

   app.use("/api/v1/users", userRoutes);
  return app;
}