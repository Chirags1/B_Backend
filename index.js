const express = require("express");
const connectDB = require("./mongoose-connnection");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const loginRoutes = require("./routes/loginRoutes");
const productRoutes = require("./routes/productRoutes");
const customerRoutes = require("./routes/customerRoutes");
connectDB();
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", loginRoutes);
app.use("/product", productRoutes);
app.use("/customer", customerRoutes);

app.listen(port, () => {
  console.log("server started");
});
