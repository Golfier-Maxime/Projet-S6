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
  });
});

app.post("/connexion", (req, res) => {
  const { email, password } = req.body;

  // Validate the incoming data
  if (!email || !password) {
    return res.status(400).json({ message: "Invalid data" });
  }

  const combinedQuery = `
    SELECT User.*, GeneratedImages.imageUrl 
    FROM User
    LEFT JOIN GeneratedImages ON User.userId = GeneratedImages.userId
    WHERE User.email = ? AND User.password = ?
  `;

  db.get(combinedQuery, [email, password], (err, result) => {
    if (err) {
      console.error("Error during user login:", err.message);
      return res.status(500).json({ message: "Internal server error" });
    }
    if (!result) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    console.log(result.userId, "userId", result.imageUrl, "imageUrl");
    res.json({
      userId: result.userId,
      pseudo: result.pseudo,
      imageUrl: result.imageUrl,
      // Ajoutez d'autres propriétés au besoin
    });
  });
});

app.post("/api/generate-image/:userId", async (req, res) => {
  const { prompt } = req.body;
  const { userId } = req.params;

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

    const imageUrl = response.data[0].url;
    const insertUserQuery =
      "INSERT INTO GeneratedImages (imageUrl, prompt, userId) VALUES (?, ?, ?)";
    // WHERE userId = ?
    // const updateQuery = "UPDATE User SET imageUrl = ?, prompt = ?";
    db.run(insertUserQuery, [imageUrl, prompt, userId], function (err) {
      // db.run(updateQuery, [imageUrl, prompt, userId], function (err) {
      if (err) {
        console.error("Error during url+prompt:", err.message);
        return res.status(500).json({ message: "Internal server error" });
      }
    });

    console.log(response);
    // console.log(response.data[0].url)
    // Exemple de traitement de la réponse - ajustez selon la structure réelle
    // Supposons que la réponse contienne une URL directe ou des données encodées

    // Ajustez ce chemin selon la réponse réelle

    res.status(200).json(response);
    // res.json({ imageUrl: user.imageUrl });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    res.status(500).json({ message: "Error generating image" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
