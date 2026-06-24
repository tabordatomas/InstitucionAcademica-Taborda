const express = require("express");
const cors = require("cors");
require("dotenv").config();

const cursosRoutes = require("./routes/cursosRoutes");
const { probarConexion } = require("./controllers/cursosController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Sistema de Cursos funcionando");
});

app.get("/api/test-db", probarConexion);
app.use("/api/cursos", cursosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
