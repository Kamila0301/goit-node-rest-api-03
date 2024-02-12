const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../services/contacts");

const contactRouter = express.Router();

contactRouter.get("/", ctrl.listContacts);

contactRouter.get("/:contactId", isValidId, ctrl.getContactById);

contactRouter.post("/", validateBody(schemas.addSchema), ctrl.addContact);

contactRouter.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

contactRouter.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

contactRouter.delete("/:contactId", isValidId, ctrl.removeContact);

module.exports = contactRouter;
