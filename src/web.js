import express from "express";
import path from "path";

const app = express();

app.use("/", express.static(path.join(__dirname, "../public")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(8022, () => console.log("Listening on 8022"));
