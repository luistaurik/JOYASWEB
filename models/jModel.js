const format = require("pg-format");
const { pool } = require("../database/connection.js");

const getData = async (limits = 5, page = 1, order = "id_ASC") => {
  try {
    const [campo, direccion] = order.split("_");
    const offset = Math.max(0, (page - 1) * limits);
    const consultaFormateada = format(
      "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
      campo,
      direccion,
      limits,
      offset
    );
    const { rows: inventario } = await pool.query(consultaFormateada);
    console.log("La consulta está estructurada asi:", consultaFormateada);
    return inventario;
  } catch (error) {
    console.error(error.message, "location: getData Function");
    throw error;
  }
};

const getTotalCount = async () => {
  try {
    const consulta = "SELECT COUNT(*) AS total FROM inventario";
    const { rows } = await pool.query(consulta);
    return parseInt(rows[0].total, 10);
  } catch (error) {
    console.error(error.message, "location: getTotalCount Function");
    throw error;
  }
};

const getJoyaId = async (id) => {
  try {
    const consulta = "SELECT * FROM inventario WHERE id = $1";
    const { rows: joya } = await pool.query(consulta, [id]);
    console.log("La consulta está estructurada asi:", consulta);
    return joya;
  } catch (error) {
    console.error(error.message, "location: getJoyaId Function");
    throw error;
  }
};

const getDataFilter = async (precio_max, precio_min, categoria, metal) => {
  let filtros = [];
  const values = [];
  const addFiltro = (campo, comparador, valor) => {
    values.push(valor);
    filtros.push(`${campo} ${comparador} $${values.length}`);
  };
  if (precio_max) addFiltro("precio", "<=", precio_max);
  if (precio_min) addFiltro("precio", ">=", precio_min);
  if (categoria) addFiltro("categoria", "=", categoria);
  if (metal) addFiltro("metal", "=", metal);

  let consulta = "SELECT * FROM inventario";
  if (filtros.length > 0) {
    consulta += ` WHERE ${filtros.join(" AND ")}`;
  }
  console.log("La consulta está estructurada asi:", consulta);
  const { rows: inventarioFiltrado } = await pool.query(consulta, values);
  return inventarioFiltrado;
};

module.exports = { getData, getDataFilter, getTotalCount, getJoyaId };
