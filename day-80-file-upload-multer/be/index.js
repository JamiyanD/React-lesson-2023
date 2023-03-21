const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const PORT = 8080;
const app = express();
const upload = multer({ storage: storage });

app.use("/upload", express.static("upload"));
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("<h1>Day 80 File upload Multer</h1>");
});

// app.get("/files", async (request, response) => {

// })

app.post("/fileUpload", upload.single("image"), (request, response, next) => {
  console.log(request.file);

  const arrayFiles = [];
  const files = fs.readdirSync("./upload").forEach((file) => {
    const fileUrl = `http://localhost:8080/upload/${file}`;
    arrayFiles.push(fileUrl);
  });
  console.log(arrayFiles);
  // fs.readFile("./upload", "utf-8", (readError, readData) => {
  //   if (readError) {
  //     response.json({
  //       status: "file reader error",
  //       data: [],
  //     });
  //   }
  //   const readObject = JSON.parse(readData);
  // });

  response.json({
    data: arrayFiles,
  });
});

app.listen(PORT, () => {
  console.log(`Express app is running on http://localhost:${PORT}`);
});
