const Director = require('./director.model');


const create = async (newdir) => Director.create(newdir);

const getAll = () => Director.getAll();

const getById = (id) => Director.getById(id);

const updateById = async (id, newdir) => Director.updateById(id, newdir);

const deleteById = async (id) => {
  const directorDeleted = await Director.deleteById(id);

  
  return directorDeleted;
};

module.exports = { create, getAll, getById, updateById, deleteById };