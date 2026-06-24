const express = require("express");
const router = express.Router();

const { obtenerCursos, obtenerCursoPorId, crearCurso, eliminarCurso } = require("../controllers/cursosController");

router.get("/", obtenerCursos);
router.get("/:id", obtenerCursoPorId);
router.post("/", crearCurso);
router.delete("/:id", eliminarCurso);

module.exports = router;
