const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use('/', (req, res) => {
    res.send('API in process..');
});

app.listen(PORT, () => {
    console.log(`Server is http://localhost:${PORT}`);
});