function checkForSpam(message) {
  let checkMessage = message.toLowerCase();
  const hasSpam = checkMessage.includes("spam");
  const hasSale = checkMessage.includes("sale");
  if (hasSpam || hasSale) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
