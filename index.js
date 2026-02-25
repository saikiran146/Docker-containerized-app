const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "Hello from Dockerized App!";

app.get("/", (req, res) => {
    res.send(MESSAGE);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
