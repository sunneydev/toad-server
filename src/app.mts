import express from "express";
import { writeFileSync } from "fs";
import "zx/globals";

const app = express();

app.get("/", async (req, res) => {});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
