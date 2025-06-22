import express from "express";
import cors from "cors";
import router from "./app/routes";
import errorHandler from "./app/middlewares/errorHandler";
import notFoundHandler from "./app/middlewares/notFoundHandler";

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running 😎");
});
app.use("/api", router);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
