console.log("day-51 : API Express JS");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { request, response } = require("express");
// const { response } = require("express");

const app = express();
const PORT = 8080;

app.use(cors()); // oor 2 portiig negtgej tohiruulj baiga
app.use(bodyParser.json()); // stringify iig json in tanij baiga

let data = [
  {
    name: "khangaikhuu",
    major: "computer science",
    id: 1,
  },
];

app.get("/", (request, response) => {
  response.send("Here I'm a brutally powerful Express Server!");
});

app.get("/data", (request, response) => {
  response.json(data);
});

app.post("/data", (request, response) => {
  const length = data.length;
  const newData = {
    id: length + 1,
    name: request.body.name,
    major: request.body.major,
  };
  data = [...data, newData];
  response.json(data);
  console.log(data);
});

app.delete("/data", (request, response) => {
  const newData = data.filter((d) => d.id !== request.body.id);
  data = newData;
  response.json(data);
  console.log(request.body);
});

app.put("/data", (request, response) => {
  //   const newData = {
  //     id: request.body.id,
  //     name: request.body.name,
  //     major: request.body.major,
  //   };

  // data.splice(request.body.id - 1,1,newData)

  const newData = data.map((d) => {
    if (d.id === request.body.id) {
      (d.name = request.body.name), (d.major = request.body.major);
    }
    return d;
  });
  response.json(data);
  console.log(request.body);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
