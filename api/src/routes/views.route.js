const express = require("express");
const path = require("path");
const { logger: l, logResponse, logSession }
  = require("@utils/logger.util");
const views = require("express").Router();
const ensureAuthenticated = require("@utils/ensureAuthenticated.util")({
  // redirectTo: "/authentication",
  // setReturnTo: true
  setReturnTo: false
});

views.get("/",
  // ensureAuthenticated,
  (req, res, next) => {
    res.sendFile(__views + "/api-documentation.html")
  }
);

// for testing purposes
views.get("/maplist",
  ensureAuthenticated,
  (req, res, next) => {
    res.sendFile(__views + "/maplist.html");
  }
);

// for testing purposes
views.get("/editor",
  ensureAuthenticated,
  (req, res, next) => {
    l.info("req.session @ GET /editor", req.session);
    res.sendFile(__views + "/editor.html");
  }
);

// for testing purposes
views.get("/authentication",
  (req, res, next) => {
    res.sendFile(__views + "/authentication.html");
  }
);

module.exports = views;

