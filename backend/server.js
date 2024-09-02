const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const verificationRoutes = require("./routes/verificationRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", verificationRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
