import { syncScrypt } from "scrypt-js";

const SITE_N = 1024;
const SITE_R = 8;
const SITE_P = 1;
const SITE_DKLEN = 32;

export function passHash(password: string, salt: Uint8Array): Uint8Array {
  var enc = new TextEncoder();
  const passBytes = enc.encode(password);
  const hash = syncScrypt(passBytes, salt, SITE_N, SITE_R, SITE_P, SITE_DKLEN);
  return hash;
}

export function passCheck(
  password: string,
  salt: Uint8Array,
  hash: Uint8Array
): boolean {
  var enc = new TextEncoder();
  const passBytes = enc.encode(password);
  const computedHash = syncScrypt(
    passBytes,
    salt,
    SITE_N,
    SITE_R,
    SITE_P,
    SITE_DKLEN
  );

  return (
    hash.length === computedHash.length &&
    hash.every((value, index) => value === computedHash[index])
  );
}

export function validateUsername(username: string) {
  const usernameExp = /^[a-z][a-z0-9]{2,}$/;
  if (!usernameExp.test(username)) {
    throw "Username must be at least 3 characters long, must start with a letter, and must only contain letters and numbers.";
  }
}

export function validatePassword(password: string) {
  if (password.length < 8) {
    throw "Password must be at least 8 characters long";
  }
  const passwordExp = /^[a-zA-Z0-9%$#@!*]+$/;
  if (!passwordExp.test(password)) {
    throw "Password can only contain letters, numbers, and the symbols '%$#@!*'";
  }
  if (!password.match(/[A-Z]/)) {
    throw "Password must contain at least one uppercase letter";
  }
  if (!password.match(/[0-9]/)) {
    throw "Password must contain at least one number";
  }
  if (!password.match(/[%$#@!*]/)) {
    throw "Password must contain at least one symbol from the set '%$#@!*'";
  }
}
