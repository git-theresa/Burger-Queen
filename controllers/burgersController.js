var express = require("express");
var router = express.Router();
var burgers = require("../models/burgers.js");

// ==============Routes===========
router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});
// ===========POST==============
router.post("/api/burgers", function(req, res) {
  burgers.create([
    "name", "devoured"
  ], 
  [
    req.body.name, req.body.devoured
  ], 
  function(result) {
      res.json({ id: result.insertId });
  });
});

// ============PUT======================
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burgers.update({
    devoured: req.body.devoured
  }, 
  condition, function(result) 
  {
    if (result.changedRows == 0) 
    {
    return res.status(404).end();
    } 
    else {
      res.status(200).end();
    }
  });
});
// ============DELETE================
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgers.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } 
    else 
    {
      res.status(200).end();
    }
  });
});


module.exports = router;
