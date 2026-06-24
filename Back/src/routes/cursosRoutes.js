const express = require("express");
const router = express.Router();

const { obtenerCursos, crearCurso, eliminarCurso } = require("../controllers/cursosController");

router.get("/", obtenerCursos);
router.post("/", crearCurso);
router.delete("/:id", eliminarCurso);

module.exports = router;
