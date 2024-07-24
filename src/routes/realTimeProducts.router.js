import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("realTimeProducts");
});

export default router;

//El archivo home.handlebars se creo dentro de la carpeta views