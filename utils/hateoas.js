const { getTotalCount } = require("../models/joyasModels");

const buildHATEOAS = async (joyas, page, limits, order) => {
  const totalCount = await getTotalCount();
  const offset = (page - 1) * limits;
  const totalPages = Math.ceil(totalCount / limits);
  let prev = null;
  let next = null;

  if (page > 1) {
    prev = `/joyas?page=${page - 1}&limits=${limits}&order=${order}`;
  }
  if (page < totalPages) {
    next = `/joyas?page=${page + 1}&limits=${limits}&order=${order}`;
  }

  if (offset >= joyas.length) {
    return {
      total: joyas.length,
      limits,
      page,
      totalPages,
      prev,
      next,
      results: joyas.map((j) => ({
        name: j.nombre,
        href: `/joyas/joya/${j.id}`,
      })),
    };
  }

  const results = joyas.slice(offset, offset + limits).map((j) => ({
    id: j.id,
    nombre: j.nombre,
    categoria: j.categoria,
    metal: j.metal,
    precio: j.precio,
    stock: j.stock,
  }));

  if (page < totalPages) {
    const next = `/joyas?page=${page + 1}&limits=${limits}`;
  }
  if (page > 1) {
    const prev = `/joyas?page=${page - 1}&limits=${limits}`;
  }
  const HATEOAS = {
    total: joyas.length,
    limits,
    page,
    totalPages,
    prev,
    next,
    results: results.map((j) => ({
      name: j.nombre,
      href: `/joyas/joya/${j.id}`,
    })),
  };

  return HATEOAS;
};

module.exports = buildHATEOAS;
