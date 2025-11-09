const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const mapObg = {};
  let res = [];
  for (let name of names) {
    if(mapObg[name]) {
    let count = mapObg[name];
    newName = name + `(${count})`;
    while(mapObg[newName]){
      count += 1;
      newName = name + `(${count})`;
    }
      mapObg[newName] = 1;
      mapObg[name] = count + 1;
      res.push(newName);
    }
    else {
      mapObg[name] = 1;
      res.push(name);
    }
  }
  return res;
}

module.exports = {
  renameFiles
};
