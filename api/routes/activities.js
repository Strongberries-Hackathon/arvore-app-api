const express = require("express");
const knex = require("../../db/knex");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { uploadHelper } = require("../utils/fileUpload");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { body } = req;
  const response = await knex("activity").insert(body, "id");
  res.send(response);
});

router.get("/", async (req, res, next) => {
  res.send(await knex("activity"));
});

router.post("/upload", upload.array("photo", 12), async (req, res) => {
  let sent = [];
  const { studant_id } = req.body;
  for (let i = 0; i < req.files.length; i++) {
    const file = req.files[i];
    const filename = file.filename;
    const path = file.path;
    sent.push(await uploadHelper(filename, path));
  }
  if (sent.length > 0) {
    await knex("activity").where({ studant_id }).update({
      status: "completed",
      uploads: sent,
    });
  }

  const activity = await knex("activity");
  res.send({ uploded: sent, activity });
});

module.exports = router;
