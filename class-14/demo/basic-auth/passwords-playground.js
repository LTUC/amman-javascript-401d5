'use strict';

const base64 = require('base-64'); //encoding and decoding
const bcrypt = require('bcrypt'); // encription (hash & compare)

const string = 'mahmoasdsadud:12345';
const encoded = base64.encode(string);
const decode = base64.decode(encoded);

console.log('String', string);
console.log('Encoded', encoded);
console.log('Decoded', decode);

const password = 'pa$sWord';

encrypt(password, 5);

async function encrypt(pw, salt) {
  const hash = await bcrypt.hash(pw, salt);
  console.log('__HASHED__', hash);
  const pw1 = '$2b$05$buXvR/vwPPbfdzX6O/UaBeXXl/b3mWJm9QdjfzMxLsYUANA2w2ZuC';
  const pw2 = '$2b$05$ec8we6EBTMbt.nBxfaWap.vLZjlbN3vN13Wa7rIGEouQQg4JWND/u';
  const pw3 = '$2b$05$ec8we6EBTMbt.nBxfaWap.vLZjlbN3vN13Wa7rIGEouQQg4JMXD/u';
  const isValid = await bcrypt.compare(pw, hash);
  const pw2Valid = await bcrypt.compare(pw1, pw2); // not gonna work only compare plain text with hash
  console.log('__WHAT__', pw2Valid);
  // const pw2Valid = await bcrypt.compare(pw, pw3);
  const pw3Valid = await bcrypt.compare(pw, pw3);
  console.log('Vaild hash', isValid);
  console.log('Not valid', pw3Valid);
}
