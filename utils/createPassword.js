const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=?';

module.exports = (length, hasNumbers, hasSymbols) => {
  let chars = alpha;
  hasNumbers ? (chars += numbers) : '';
  hasSymbols ? (chars += symbols) : '';

  return genratePassword(length, chars);
};

const genratePassword = (length, chars) => {
  let password = '';
  for (let index = 0; index < length; index++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};
