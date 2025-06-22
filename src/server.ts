import dotenv from "dotenv";
import app from "./app";
import connectDB from "./app/config/db";

dotenv.config();

const PORT = process.env.PORT || 5000;

const bootstrap = async () => {
  await connectDB();
  app.listen(PORT, () =>
    console.log(`🚀 Server running at http://localhost:${PORT}`),
  );
};

bootstrap();
