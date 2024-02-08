const express = require('express');
require('dotenv').config();
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY
});

app.post('/api/generate-image', async (req, res) => {
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
