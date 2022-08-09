const { logger: l } = require("@utils/logger.util");
const db = require("@boot/db.boot");

async function insertNode(values) {
  l.info("values @ insertNode", values);

  if (!values.parent_id) { // INFO: record to be inserted is a main node
    var qs = "INSERT INTO nodes (user_id, content, map_id) VALUES ($1, $2, $3) RETURNING *";
    var qp = [values.user_id, values.content, values.map_id];
  } else {
    var qs = "INSERT INTO nodes (user_id, parent_id, content, map_id) VALUES ($1, $2, $3, $4) RETURNING *";
    var qp = [values.user_id, values.parent_id, values.content, values.map_id];
  }

  try {
    l.info("qp @ insertNode", qp);
    const res = await db.query(qs, qp);
    l.info("res @ insertNode: %s\n", qs, res);

    if (!res || !res.rowCount) {
      throw new Error("failed to insert node record", {
        cause: "Query failure"
      });
    }

    return res.rows[0];
  } catch (err) {
    if (err.cause === "Query failure") {
      l.error(err.message, err.cause);
      res.status(500).send(err.message); // FIX: this res is not res(ponse). return a value from here and make a corresponding response from controller function
    } else {
      l.error(err);
      throw new Error("unhandled exception");
    }
  }
}

async function selectNodeById(id) {
  try {
    const qs = "SELECT * FROM nodes where id = $1";
    const qp = [id];

    l.info("qp @ selectNodeById", qp);
    const res = await db.query(qs, qp);
    l.info("res @ selectNodeById: SELECT * FROM nodes where id = $1\n", res);

    if (!res) {
      return new Error("failed to retrieve node record", {
        cause: "Query failure"
      });
    } else if (!res.rowCount) {
      return false;
    }

    return res.rows[0];
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
    const res = await db.query(qs, qp);
    l.info("res @ selectNodesByMapId: SELECT * FROM nodes where map_id = $1\n", res);

    if (!res) {
      throw new Error("failed to retrieve nodes records", {
        cause: "Query failure"
      });
    }

    return res.rows;
  } catch (err) {
    l.error(err);
    if (err.cause === "Query failure") {
      l.error(err.message, err.cause);
      res.status(500).send(err.message); // FIX: this res is not res(ponse). return a value from here and make a corresponding response from controller function
    } else {
      throw new Error("unhandled exception");
    }
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

    if (!dbr || !dbr.rowCount) {
      return new Error("failed to update node record", {
        cause: "Query failure"
      });
    }

    return dbr.rows[0];
  } catch (err) {
    l.error(err);
    throw new Error("unhandled exception");
  }
}
/*
async function deleteNodesByMapId(condition) {
  try {
    // TODO: determine validation criteria and validate value with express-validator
    const qs = "DELETE FROM nodes WHERE map_id = $1";
    const qp = [condition];

    l.info("qp @ deleteNodesByMapId", qp);
    const res = await db.query(qs, qp);
    l.info("res = DELETE FROM nodes WHERE map_id = $1\n", res);

    if (!res || !res.rowCount) {
      return new Error("failed to delete node record(s)", {
        cause: "Query failure"
      });
    }

    return true;
  } catch (err) {
    l.error(err);
    throw new Error("unhandled exception");
  }
}
*/

module.exports = {
  insertNode,
  selectNodeById,
  selectNodesByMapId,
  updateNodeById
}

