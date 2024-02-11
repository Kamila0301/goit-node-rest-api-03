const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const contactRouter = express.Router();

contactRouter.get("/", ctrl.listContacts);

contactRouter.get("/:id", ctrl.getContactById);

contactRouter.delete("/:id", ctrl.removeContact);

contactRouter.post("/", validateBody(schemas.addSchema), ctrl.addContact);

contactRouter.put("/:id", validateBody(schemas.addSchema), ctrl.updateContact);

module.exports = contactRouter;
