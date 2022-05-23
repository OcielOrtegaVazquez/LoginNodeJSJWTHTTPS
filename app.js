require('dotenv').config();
const expres = require('express');
const cors = require('cors');
const app = expres();
const { Router } = require('express');
const morgan = require('morgan');

app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Aplicación Iniciadad en el puerto: " + PORT);
});