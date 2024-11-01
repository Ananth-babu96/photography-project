import express from "express";
import cors from "cors";
import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const server = express();
server.use(express.static("public"));

server.use(
   cors({
      origin: "https://Ananth-babu96.github.io/photography-project-client",
   })
);
server.use(express.json());

const db = mysql.createConnection({
   host: process.env.HOST,
   user: process.env.USER,
   database: process.env.DB,
   password: process.env.PW,
});

server.get("/", (req, res) => {
   const sql = "SELECT * FROM images";
   db.query(sql, (err, result) => {
      if (err) {
         res.send("some error");
      } else {
         res.json(result);
      }
   });
});
const port = process.env.PORT;
server.listen(port, () => console.log("running at 5000"));

console.log(process.env.USER);
