const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;

require("dotenv").config();
require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", require("./Routes/userRoutes").router);
app.use("/api/admin", require("./Routes/adminRoutes").router);
app.use("/api/compteBC", require("./Routes/comptebcRoutes").router);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
