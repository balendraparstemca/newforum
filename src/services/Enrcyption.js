import * as crypto from 'crypto';

 class Encryptionservice {
   cryptkey = crypto.createHash('sha256').update('Nixnogen').digest();
   iv = 'a2xhcgAAAAAAAAAA';

  encryptData = (data) => {
    const encipher = crypto.createCipheriv('aes-256-cbc', this.cryptkey, this.iv);
    let encryptdata = encipher.update(data, 'utf8', 'base64');
    encryptdata += encipher.final('base64');
    return encryptdata;
  };

   decyrptData = (encData) => {
    const decipher = crypto.createDecipheriv('aes-256-cbc', this.cryptkey, this.iv);
    let decrypted = decipher.update(encData, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  };

  
}

export default new Encryptionservice();