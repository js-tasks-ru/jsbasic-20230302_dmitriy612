function checkSpam(str) {
  const spamWords = ["1xBet", "XXX"];
  const strInLowerCase = str.toLowerCase();
  for (let spamWord of spamWords) {
    if (strInLowerCase.includes(spamWord.toLowerCase())) {
      return true;
    }
  }
  return false;
}
