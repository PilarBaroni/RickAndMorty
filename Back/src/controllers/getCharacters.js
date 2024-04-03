const axios = require("axios");

const getCharacters = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 8;
    const offset = (page - 1) * pageSize;

    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}&pageSize=${pageSize}`
    );

    const characters = data.results.map((characterData) => ({
      id: characterData.id,
      name: characterData.name,
      species: characterData.species,
      status: characterData.status,
      origin: characterData.origin.name,
      image: characterData.image,
      location: characterData.location.name,
    }));

    return res.status(200).json({
      characters,
      page: parseInt(page),
      totalPages: Math.ceil(data.info.count / pageSize),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = {
  getCharacters,
};
