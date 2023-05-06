const express = require("express")
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const { set } = require("mongoose");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
set("strictQuery", false);
connectDB();
const app = express();

app.use(express.json());

app.get("/",(req,res) =>{

    res.send("skdjf");

})

app.use('/api/user',userRoutes);
app.use("/api/chat", chatRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(5000,console.log(`Port ${PORT}`.yellow.bold));
 