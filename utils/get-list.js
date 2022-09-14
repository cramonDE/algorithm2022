
/**
 * 
 * @param {number} length 
 * @param {number} range 
 * @returns number[]
 */
const getNumberList = (length, range) => {
  return new Array(length).fill(0).map(() => Math.floor(Math.random() * range));
};

const forkNewList = (list) => new Array(...list);


module.exports = {
  getNumberList,
  forkNewList,
};