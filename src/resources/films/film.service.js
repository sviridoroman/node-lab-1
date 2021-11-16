const Film = require('./film.model');


const create = async (newfilm, params) => {
  const filmCreatable = {
    ...newfilm,
    directorId: params?.directorId,
  };
  return Film.create(filmCreatable);
};


const getAll = () => Film.getAll();

const getById = (id) => Film.getById(id);

const getAllByDirectorId = (directorid) => Film.getAllByDirectorId(directorid);

const updateById = async (id, newfilm) => Film.updateById(id, newfilm);

const deleteById = async (id) => {
  const directorDeleted = await Film.deleteById(id);

  
  return directorDeleted;
};

module.exports = { create, getAll, getById, getAllByDirectorId, updateById, deleteById };