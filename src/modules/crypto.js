import crypto from "crypto";
import { isType } from "../utils";
export class AES_CORE {
  constructor(data, params) {
    this.algorithm = "aes-256-gcm";
    this.ivLength = 12;
    this.tagLength = 16;
    this.format = "base64";
    this.data = data?.payload || data;
    this.key = process.env.REACT_APP_LOCAL_ENCRYPT_KEY;
    this.encrypt = this.encrypt.bind(this);
    this.decrypt = this.decrypt.bind(this);
    if (params === null || params === undefined || params === "") {
      let localConf = sessionStorage._configs || "";
      if (localConf.length > 0) {
        try {
          localConf = window.atob(localConf);
          localConf = JSON.parse(localConf);
        } catch (err) {
          localConf = {};
        }
      }
      const { source, product } = localConf;
      if (source !== undefined && product !== undefined) {
        this.key = process.env[`REACT_APP_ENCRYPT_KEY_${product}_${source}`];
      } else if (source !== undefined && product === undefined) {
        this.key = process.env[`REACT_APP_ENCRYPT_KEY_${source}_OPEN`];
      }
    }
  }
  encrypt = () => {
    const iv = crypto.randomBytes(this.ivLength);
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);
    let cipherText = cipher.update(JSON.stringify(this.data), "utf-8");
    cipherText = Buffer.concat([cipherText, cipher.final()]);
    const tag = cipher.getAuthTag();
    const encryptedData = Buffer.concat([iv, cipherText, tag]);
    return encryptedData.toString(this.format);
  };
  decrypt = () => {
    const encryptedBuffer = Buffer.from(this.data, this.format);
    const iv = encryptedBuffer.slice(0, this.ivLength);
    const cipherText = encryptedBuffer.slice(this.ivLength, -this.tagLength);
    const tag = encryptedBuffer.slice(-this.tagLength);
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv);
    decipher.setAuthTag(tag);
    let data = decipher.update(cipherText, "base64", "utf8");
    data += decipher.final("utf8");
    return typeof data === "string" ? JSON.parse(data) : data;
  };
  staticDecrypt = (flag) => {
    if (flag === null || flag === undefined || flag === "") {
      return null;
    } else {
      let decKey = this.key;

      if (flag === "Life99") {
        decKey = process.env.REACT_APP_ENCRYPT_KEY_LIFE99;
      }
      const encryptedBuffer = Buffer.from(this.data, this.format);
      const iv = encryptedBuffer.slice(0, this.ivLength);
      const cipherText = encryptedBuffer.slice(this.ivLength, -this.tagLength);
      const tag = encryptedBuffer.slice(-this.tagLength);
      const decipher = crypto.createDecipheriv(this.algorithm, decKey, iv);

      decipher.setAuthTag(tag);
      let data = decipher.update(cipherText, "base64", "utf8");
      data += decipher.final("utf8");
      return typeof data === "string" ? JSON.parse(data) : data;
    }
  };
}
