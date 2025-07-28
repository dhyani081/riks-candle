import connectDB from "./config/database.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/authRoutes.js"



// load env file
dotenv.config();


// App Setup
const app = express();
const PORT = process.env.PORT || 5000;


//Connect to Database
connectDB();

//Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());

//Routes Calling
app.use("/api/auth", authRoutes);

//Default Route

app.get("/", (req, res) => {
    res.send("Riks Candle Backend is running");
});

//Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})

