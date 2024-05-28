
const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsRoutes = Router();

const tagsController = new TagsController();

// utilizando o query a rota não é impedida de ser acessada diferente de um parâmentro de rota ("params")
// os "query params" eles são opicionais

tagsRoutes.use(ensureAuthenticated)

tagsRoutes.get("/", tagsController.index);

module.exports = tagsRoutes;