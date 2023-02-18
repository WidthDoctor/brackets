module.exports = function check(str, bracketsConfig) {
  let soup = 1;
  while (soup === 1) {
      let OldStr = str;
      bracketsConfig.map((del) => (str = str.replace(del[0] + del[1], "")));
      if (OldStr === str) {
          soup = 0;
      }
  }
  return str.length === 0 ? true : false;
};
