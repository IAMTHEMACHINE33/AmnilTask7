const express = require("express");
const app = express();
require('dotenv').config();

app.use(express.json());
const port = process.env.PORT || 9000;

const userRouter = require("./route/userRoute");
app.use("/users", userRouter);

const productRouter = require("./route/productRoute");
app.use("/products", productRouter);

app.listen(port, () => {
    console.log("Server on ", port);
})