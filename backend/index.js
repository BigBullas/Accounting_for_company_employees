const express = require("express"); // импорт библиотеки express
const http = require("http");
const cors = require("cors");

const staff  = require("./staff");

const app = express(); // создание экземпляра приложения express

app.use(cors({
  origin: 'http://localhost:3000'
}));

const server = http.createServer(app); // создание HTTP-сервера
app.use(express.json());

const PORT = process.env.PORT || 8085; // присвоения порта

const HOSTNAME = "localhost";

app.get("/get_employees", async (req, res) => {
  console.log('request');
  res.json(staff)
});

// запуск сервера приложения
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server started at http://${HOSTNAME}:${PORT}`);
});
