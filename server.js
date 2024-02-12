const express = require("express");
const sqlite3 = require("sqlite3");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const OpenAI = require("openai");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});

const db = new sqlite3.Database("./database/OA_DB.db", (err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Connected to the database");
  }
});

app.get("/", (req, res) => {
  res.redirect("/users");
});

app.get("/users", (req, res) => {
  db.all("SELECT * FROM User", (err, rows) => {
    if (err) {
      console.error("Error fetching user:", err.message);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(rows); // Return the list of recipes as JSON response
  });
});

app.post("/inscription", (req, res) => {
  const { email, password, pseudo } = req.body;

  // Validate the incoming data (you should add more validation)
  if (!email || !password || !pseudo) {
    return res.status(400).json({ message: "Invalid data" });
  }

  // Example: Insert user data into the database
  const insertUserQuery =
    "INSERT INTO User (email, password, pseudo) VALUES (?, ?, ?)";
  db.run(insertUserQuery, [email, password, pseudo], function (err) {
    if (err) {
      console.error("Error during user registration:", err.message);
      return res.status(500).json({ message: "Internal server error" });
    }

    // const userId = this.lastID;

    // // Example: Update panierID for the user
    // const updatePanierQuery = 'UPDATE User SET panierID = ? WHERE userID = ?';
    // db.run(updatePanierQuery, [userId, userId], function (err) {
    //   if (err) {
    //     console.error('Error updating panierID for user:', err.message);
    //     return res.status(500).json({ message: 'Internal server error' });
    //   }

    //   console.log(`User registered successfully with ID: ${userId}`);
    //   res.json({ message: 'User registered successfully' });
    // });
  });
});

app.post("/connexion", (req, res) => {
  const { email, password } = req.body;

  // Validate the incoming data (you should add more validation)
  if (!email || !password) {
    return res.status(400).json({ message: "Invalid data" });
  }

  // Check if the user exists and validate the password
  const selectUserQuery = "SELECT * FROM User WHERE email = ? AND password = ?";
  db.get(selectUserQuery, [email, password], (err, user) => {
    if (err) {
      console.error("Error during user login:", err.message);
      return res.status(500).json({ message: "Internal server error" });
    }

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({ userId: user.userId, token: user.userId, pseudo: user.pseudo });
    console.log(user.userId);
    // res.json({ token: user.userId });
    // console.log(token);
  });
});

app.post("/api/generate-image", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: "Prompt is required" });
  }

  try {
    const response = await openai.images.generate({
      model: "dall-e-3", // Vérifiez le nom correct du modèle pour la génération d'images
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      // Ajoutez ici d'autres paramètres spécifiques à la génération d'images, si nécessaire
    });
    console.log(response);
    // Exemple de traitement de la réponse - ajustez selon la structure réelle
    // Supposons que la réponse contienne une URL directe ou des données encodées
    const imageUrl = response.data.url;
    // Ajustez ce chemin selon la réponse réelle

    res.status(200).json(response);
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    res.status(500).json({ message: "Error generating image" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
