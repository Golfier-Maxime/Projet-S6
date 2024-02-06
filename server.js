const express = require('express');
// const { OpenAIApi } = require("openai");
require('dotenv').config();

const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());
app.use(express.json());

// import OpenAI from 'openai';
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY // This is also the default, can be omitted
});
// Initialisation directe de l'API OpenAI avec la clé API
// const openai = new OpenAIApi({
//   apiKey: process.env.VITE_OPENAI_API_KEY,
// });

app.post('/api/generate-image', async (req, res) => {
  const { prompt } = req.body;
  
  if (!prompt) {
    return res.status(400).json({ message: "Prompt is required" });
  }

  try {
    // Assurez-vous que la méthode et les paramètres sont corrects selon la documentation de l'API OpenAI
    const response = await openai.images.generate({
      model: "dall-e-3", // Vérifiez le nom correct du modèle pour la génération d'images
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      // Ajoutez ici d'autres paramètres spécifiques à la génération d'images, si nécessaire
    });
    image_url = response.data.data[0].url;
    // Traitez et envoyez la réponse au client. Assurez-vous de renvoyer la structure correcte de la réponse.
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    res.status(500).json({ message: "Error generating image" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
