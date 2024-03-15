const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Manejador para el webhook
app.post('/webhook', (req, res) => {
  const body = req.body;
  console.log('Mensaje recibido:', body);
  res.status(200).send('OK');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
