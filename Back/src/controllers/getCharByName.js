const axios = require("axios");
const { Character } = require("../models/Character");

const getCharByName = async (req, res) => {
  const { name } = req.query;

  try {
    if (!name) {
      return res
        .status(400)
        .json({ message: "Debe proporcionar un nombre de personaje." });
    }

    const lowercaseNameQuery = name.toLowerCase();

    try {
      // Hacer una solicitud a la API de Rick and Morty con el nombre proporcionado
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${lowercaseNameQuery}`
      );

      // Si se encuentra el personaje en la API, responder con los detalles del personaje
      if (data.results.length > 0) {
        const characters = data.results.map((characterData) => ({
          id: characterData.id,
          name: characterData.name,
          species: characterData.species,
          status: characterData.status,
          origin: characterData.origin.name,
          image: characterData.image,
          location: characterData.location.name,
        }));
        return res.status(200).json(characters);
      }

      // Si no se encuentra en la API, buscar en la base de datos
      const foundCharacters = await Character.findAll({
        where: { name: lowercaseNameQuery },
      });
      if (foundCharacters.length > 0) {
        return res.status(200).json(foundCharacters);
      }

      // Si no se encuentra en la base de datos, responder con un mensaje de error
      return res.status(404).json({ message: "Personaje no encontrado." });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error interno del servidor." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = {
  getCharByName,
};
