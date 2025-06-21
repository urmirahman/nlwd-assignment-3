import dotenv from "dotenv";
import app from "./index";
import connectDB from "./config/db";

dotenv.config();

const PORT = process.env.PORT || 5000;

const bootstrap = async () => {
  await connectDB();
  app.listen(PORT, () =>
    console.log(`🚀 Server running at http://localhost:${PORT}`),
  );
};

bootstrap();
