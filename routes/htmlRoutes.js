var path = require("path");
var express = require("express");

module.exports = (router)=>{ 
  //router.use(express.static(path.join(__dirname, "./public")));

  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  router.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });


  router.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};

