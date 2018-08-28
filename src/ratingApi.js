const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

const buffer = fs.readFileSync("./data.json");

const showObjs = JSON.parse(buffer);

app.get("/:id", (req, res) => {
  const ratedShows = showObjs.shows.map(show =>
    Object.assign(
      {
        rating: `${Math.floor(Math.random() * 9)}.${Math.floor(
          Math.random() * 9
        )}`
      },
      show
    )
  );

  const reqshow = ratedShows.find(
    ratedshow => ratedshow.imdbID === req.params.id
  );

  if (reqshow) {
    console.log(reqshow.title);

    setTimeout(() => {
      res.json(reqshow);
    }, Math.floor(Math.random() * 5000));
  } else {
    console.log(404, req.params.id);

    res
      .status(404)
      .json({ error: "there is an error because show is not found" });
  }
});

app.listen(3001);
