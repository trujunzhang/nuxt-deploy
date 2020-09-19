// const randtoken = require('rand-token')

/**
 * Package: node-rand-token: 
 *   https://github.com/sehrope/node-rand-token
 * 
 * Usage: 
 * // Create a token generator with the default settings:
 *  var randtoken = require('rand-token');

 *  // Generate a 16 character alpha-numeric token:
 *  var token = randtoken.generate(16);

 *  // Use it as a replacement for uid:
 *  var uid = require('rand-token').uid;
 *  var token = uid(16);

 *  // Generate mostly sequential tokens:
 *  var suid = require('rand-token').suid;
 *  var token = suid(16);
 */
export class NodeRandTokenUtils {
  static generate(number: number) {
    // const token = randtoken.generate(number)
    const token =
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    return token
  }
}
