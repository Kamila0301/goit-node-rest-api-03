const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const contactRouter = express.Router();

contactRouter.get("/", ctrl.listContacts);

contactRouter.get("/:contactId", ctrl.getContactById);

contactRouter.post("/", validateBody(schemas.addSchema), ctrl.addContact);

contactRouter.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

contactRouter.delete("/:contactId", ctrl.removeContact);

module.exports = contactRouter;
