import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.VUE_APP_DB_PASSWORD,
  database: "gameclub",
});

app.post("/add-user", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedWord = await bcrypt.hash(password, salt);

    const [result] = await pool.query(
      "INSERT INTO accounts (username,password,email) VALUES (?,?,?)",
      [username, hashedWord, email]
    );

    res.status(201).json({
      message: "здесь message",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "error at server in add-user post" });
  }
});

app.listen(port, () => {
  console.log(`Сервер трахтит на порту ${port}`);
});
