const { logger: l } = require("@utils/logger.util");
const db = require("@boot/db.boot");

async function insertNode(values) {
  l.info("values @ insertNode", values);
  try {
    if (!values.parent_id) { // INFO: record to be inserted is a main node
      var qs = "INSERT INTO nodes (user_id, content, map_id) VALUES ($1, $2, $3) RETURNING *";
      var qp = [values.user_id, values.content, values.map_id];
    } else {
      var qs = "INSERT INTO nodes (user_id, parent_id, content, map_id) VALUES ($1, $2, $3, $4) RETURNING *";
      var qp = [values.user_id, values.parent_id, values.content, values.map_id];
    }

    l.info("qp @ insertNode", qp);
    const dbr = await db.query(qs, qp);
    l.info("dbr @ insertNode: %s\n", qs, dbr);

    if (!dbr) {
      const err = new Error("failed to create node record", {
        cause: "Query failure"
      });
      l.error(err);
      return err;
    }

    if (dbr.rowCount === 1)
      return dbr.rows[0];
    else
      return false;

    throw new Error(); // TODO: investigate a case that could reach this code
  } catch (err) {
    l.error(err);
    throw new Error("unhandled exception");
  }
}

async function selectNodeById(id) {
  try {
    const qs = "SELECT * FROM nodes where id = $1";
    const qp = [id];

    l.info("qp @ selectNodeById", qp);
    const dbr = await db.query(qs, qp);
    l.info("dbr @ selectNodeById: SELECT * FROM nodes where id = $1\n", dbr);

    if (!dbr) {
      const err = new Error("failed to retrieve node record", {
        cause: "Query failure"
      });
      l.error(err);
      return err;
    }

    if (dbr.rowCount === 1)
      return dbr.rows[0];
    else
      return false;

    throw new Error(); // TODO: investigate a case that could reach this code
  } catch (err) {
    l.error(err);
    throw new Error("unhandled exception");
  }
}

async function selectNodesByMapId(mapId) {
  try {
    const qs = "SELECT * FROM nodes where map_id = $1";
    const qp = [mapId];

    l.info("qp @ selectNodesByMapId", qp);
    const dbr = await db.query(qs, qp);
    l.info("dbr @ selectNodesByMapId: SELECT * FROM nodes where map_id = $1\n", dbr);

    if (!dbr) {
      const err = new Error("failed to get map record(s)", {
        cause: "Query failure"
      });
      l.error(err);
      return err;
    }

    if (0 < dbr.rowCount)
      return dbr.rows;
    else
      false;

    throw new Error(); // TODO: investigate a case that could reach this code
  } catch (err) {
    l.error(err);
    throw new Error("unhandled exception");
  }
}

async function updateNodeById(values) {
  l.info("values @ updateNodeById", values);
  try {
    var qs = "UPDATE nodes SET content = $1, parent_id = $2 WHERE id = $3 RETURNING *";
    var qp = [values.content, values.parent_id, values.id];

    l.info("qp @ updateNodeById", qp);
    const dbr = await db.query(qs, qp);
    l.info("dbr @ updateNodeById: %s\n", qs, dbr);

    if (!dbr) {
      const err = new Error("failed to update map record", {
        cause: "Query failure"
      });
      l.error(err);
      return err;
    }

    if (dbr.rowCount === 1)
      return dbr.rows[0];
    else
      return false;

    throw new Error(); // TODO: too paranoid?
  } catch (err) {
    l.error(err);
    throw new Error("unhandled exception");
  }
}

async function deleteNodeById(id) {
  try {
    const qs = "DELETE FROM nodes WHERE id = $1";
    const qp = [id];

    l.info("qp @ deleteNodeById", qp);
    const dbr = await db.query(qs, qp);
    l.info("dbr = DELETE FROM nodes WHERE id = $1\n", dbr);

    if (!dbr) {
      const err = new Error("failed to delete node record", {
        cause: "Query failure"
      });
      l.error(err);
      return err;
    }

    if (dbr.rowCount === 1)
      return true;
    else
      return false;

    throw new Error(); // TODO: investigate a case that could reach this code
  } catch (err) {
    l.error(err);
    throw new Error("unhandled exception");
  }
}

module.exports = {
  insertNode,
  selectNodeById,
  selectNodesByMapId,
  updateNodeById,
  deleteNodeById
}

