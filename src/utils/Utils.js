import aesjs from "aes-js";

const paddSpaces = (password) => {
  while (password.length < 16) {
    password = decodeURIComponent(process.env.REACT_APP_PADDSPACES) + password;
  }
  return password;
};

export const encryptPassword = (password) => {
  if (password && password.length > 0) {
    const key = JSON.parse(process.env.REACT_APP_ENCRYPTION_KEY);
    const iv = JSON.parse(process.env.REACT_APP_ENCRYPTION_IV);
    const text = password.length < 16 ? paddSpaces(password) : password; // if password < 16 Bytes then paddSpaces
    const textBytes = aesjs.utils.utf8.toBytes(text);
    const aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
    const encryptedBytes = aesCbc.encrypt(textBytes);
    const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex;
  } else {
    return "";
  }
};
