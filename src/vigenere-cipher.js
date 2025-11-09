const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(value = true){
    this.value = value;
  }
  encrypt(message, key) {
    if (!message || !key){
      throw new Error('Incorrect arguments!');
    }
    let messageArr = message.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let j = 0;
    let encMess = '';
    for (let i = 0; i < messageArr.length; i += 1) {
      if(/[A-Z]/.test(messageArr[i])) {
        let m = messageArr[i].charCodeAt(0) - 65;
        let k = keyArr[j % keyArr.length].charCodeAt(0) - 65;
        encMess += String.fromCharCode((m + k) % 26 + 65);
        j += 1;
      }
      else encMess += messageArr[i];
    }
    return this.value === true ? encMess : encMess.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key){
      throw new Error('Incorrect arguments!');
    }
    let messageArr = message.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let j = 0;
    let decMess = '';
    for (let i = 0; i < messageArr.length; i += 1) {
      if(/[A-Z]/.test(messageArr[i])) {
        let m = messageArr[i].charCodeAt(0) - 65;
        let k = keyArr[j % keyArr.length].charCodeAt(0) - 65;
        decMess += String.fromCharCode((m - k + 26) % 26 + 65);
        j += 1;
      }
      else decMess += messageArr[i];
    }
   return this.value === true ? decMess : decMess.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
