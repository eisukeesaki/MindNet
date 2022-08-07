const { logger: l } = require("@utils/logger.util");
const { insertMap, selectMapsByUserId, selectMapById, updateMapById, deleteMapById } =
  require("@services/maps.service");

async function createMap(req, res, next) {
  try {
    const title = req.body.title;
    const userId = req.session.userId;

    const row = await insertMap([title, userId]);
    l.info("row @ createMap", row);

    res.status(201).send(row);
  } catch (err) {
    l.error(err);
    // TODO: determine possible errors and handle them specifically
    throw new Error("unhandled exception");
  }
}

/*
TODO: validate req.body
*/
async function getMaps(req, res) {
  try {
    const userId = req.session.userId;

    const rows = await selectMapsByUserId(userId);

    res.send(rows);
  } catch (err) {
    l.error(err);
    // TODO: determine possible errors and handle them specifically
    throw new Error("unhandled exception");
  }
}

/*
desc: If session user owns the specified map, UPDATE it.
TODO: validate req.body
*/
async function updateMap(req, res, next) {
  try {
    const mapId = req.body.id;
    const title = req.body.title;
    const userId = req.session.userId;
    l.info("mapId @ updateMap", mapId);
    l.info("title @ updateMap", title);

    const toUpdate = await selectMapById(mapId);
    l.info("toUpdate @ updateMap", toUpdate);
    if (toUpdate instanceof Error) // TODO: use switch case
      throw row;
    if (toUpdate.user_id != userId)
      return res.status(401).end();
    if (toUpdate.title === title) {
      return res.send(toUpdate); // TODO: more appropriate response?
    }

    const updated = await updateMapById(mapId, title);
    if (updated instanceof Error)
      throw updated;

    res.status(201).send(updated);
  } catch (err) {
    if (err.cause === "Query failure") {
      l.error(err.message, err.cause);
      res.status(500).send(err.message);
    } else {
      l.error(err);
      // TODO: determine possible errors and handle them specifically
      throw new Error("unhandled exception");
    }
  }
}

async function deleteMap(req, res, next) {
  try {
    const mapId = req.body.id;
    const userId = req.session.userId;

    const toDelete = await selectMapById(mapId);
    l.info("toDelete @ updateMap", toDelete);
    if (toDelete instanceof Error)  // TODO: use switch case
      throw row;
    if (!toDelete)
      return res.status(404).end();
    if (toDelete.user_id != userId)
      return res.status(401).end();

    const deleted = await deleteMapById(mapId);
    if (deleted instanceof Error)
      throw deleted;

    res.status(200).send(deleted);
  } catch (err) {
    if (err.cause === "Query failure") {
      l.error(err.message, err.cause);
      res.status(500).send(err.message);
    } else {
      l.error(err);
      throw new Error("unhandled exception"); // TODO: determine possible errors and handle them specifically
    }
  }
}

module.exports = {
  createMap,
  getMaps,
  updateMap,
  deleteMap
};

/* use this to receive userId through query string parameters

async function getMaps(req, res) {
  try {
    const userId = req.query.user_id;

    const validQS = validateQueryString(userId);

    if (validQS) {
      const rows = await fetchMapsByUserId(userId);

      res.send(rows);
    } else {
      throw new Error("query string is not a valid UUID", {
        cause: "InvalidUUID"
      });
    }
  } catch (err) {
    if (e.cause === "InvalidUUID") {
      l.error({ message: e.message, cause: e.cause });
      res.status(400).send(e.message);
    } else {
      l.error(err);
      throw new Error("unhandled exception");
    }
  }
}

*/

