import { AES_CORE } from "./crypto";
export function Encrypt(data, params) {
  return new AES_CORE(data, params).encrypt();
}

export function Decrypt(data, params) {
  return new AES_CORE(data, params).decrypt();
}

export function StaticDecrypt(data, flag) {
  return new AES_CORE(data, null).staticDecrypt(flag);
}
