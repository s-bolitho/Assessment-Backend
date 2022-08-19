const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune)

const { getWillSamPassThisBootcamp } = require('./controller')

app.get("/api/willSamPassThisBootcamp", getWillSamPassThisBootcamp);

const { getIsEghaCool } = require('./controller')

app.get("/api/isEghaCool", getIsEghaCool)

app.listen(4000, () => console.log("Server running on 4000"));

