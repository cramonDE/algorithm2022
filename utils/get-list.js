
/**
 * 
 * @param {number} length 
 * @param {number} range 
 * @returns number[]
 */
const getNumberList = (length, range) => {
  return new Array(length).fill(0).map(() => Math.floor(Math.random() * range));
};

module.exports = {
  getNumberList,
};