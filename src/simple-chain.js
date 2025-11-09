const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value !== undefined ? value : ''} )`)
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position < 1 || position > this.chain.length){
      this.chain.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainString = this.chain.join('~~');
    this.chain.length = 0;
    return chainString;
  },
};

module.exports = {
  chainMaker,
};
