import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

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

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const [users] = await pool.query(
      "SELECT * from accounts WHERE username=?",
      [username]
    );

    if (users.length === 0) {
      return res.status(401).json({ error: "User not found" });
    }

    const user = users[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Password incorrect" });
    }

    res.json({
      message: "Success auth",
      user: JSON.stringify({
        id: user.id,
        username: user.username,
      }),
    });
  } catch (error) {
    res.status(500).json({ error: "Error at server login" });
  }
});

app.listen(port, () => {
  console.log(`Сервер трахтит на порту ${port}`);
});
