const express = require("express");
const connectDB = require("./mongoose-connnection");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const loginRoutes = require("./routes/loginRoutes");
const productRoutes = require("./routes/productRoutes");
const customerRoutes = require("./routes/customerRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const cors = require("cors");
const helmet = require("helmet");
connectDB();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", loginRoutes);
app.use("/product", productRoutes);
app.use("/customer", customerRoutes);
app.use("/invoice", invoiceRoutes);

app.listen(port, () => {
  console.log("server started on port" + port);
});
