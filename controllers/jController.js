const {
  getData,
  getDataFilter,
  getJoyaId,
} = require("../models/joyasModels.js");
const buildHATEOAS = require("../utils/hateoas.js");

class JoyasController {
  constructor() {}

  async queryData(req, res) {
    try {
      const { limits, page, order = "id_ASC" } = req.query;
      const joyas = await getData(limits, page, order);
      if (!joyas || joyas.length === 0) {
        return res.status(404).json({ error: "No se encontraron joyas." });
      }
      const HATEOAS = await buildHATEOAS(
        joyas,
        parseInt(page),
        parseInt(limits),
        order
      );
      res.status(200).json(HATEOAS);
    } catch (error) {
      res
        .status(500)
        .json({ error: error.message, location: "queryData Function" });
    }
  }

  async byId(req, res) {
    try {
      const { id } = req.params;
      const joya = await getJoyaId(id);
      res.status(200).json(joya);
    } catch (error) {
      res.status(500).json({ error: error.message, location: "byId Function" });
    }
  }

  async queryDataFilter(req, res) {
    try {
      const { precio_max, precio_min, categoria, metal } = req.query;
      const joyas = await getDataFilter(
        precio_max,
        precio_min,
        categoria,
        metal
      );
      if (!joyas || joyas.length === 0) {
        return res.status(404).json({ error: "No se encontraron joyas." });
      }
      res.status(200).json(joyas);
    } catch (error) {
      res.json({ error: error.message });
    }
  }
}

module.exports = new JoyasController();
