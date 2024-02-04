const express = require('express');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());
app.use(express.json());

// Configuration de l'API OpenAI
const configuration = process.env.VITE_OPENAI_API_KEY
const openai = configuration

app.post('/api/generate-image', async (req, res) => {
  const { prompt } = req.body;
  
  if (!prompt) {
    return res.status(400).json({ message: "Prompt is required" });
  }

  try {
    // Adaptez cette partie pour utiliser le bon modèle et les paramètres pour la génération d'images
    const response = await openai.createImage({ // Cette méthode est à ajuster selon l'API spécifique de génération d'images
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      // Ajoutez d'autres paramètres spécifiques à la génération d'images ici
    });
    // Traitez et envoyez la réponse au client
    // La structure de `response.data` dépendra de l'API spécifique et de la façon dont les images sont retournées
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    res.status(500).json({ message: "Error generating image" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});