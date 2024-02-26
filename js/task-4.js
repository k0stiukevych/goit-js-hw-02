function getShippingCost(country) {
  const delChina = 100;
  const delChile = 250;
  const delAustralia = 170;
  const delJamaica = 120;

  switch (country) {
    case "China":
      return `Shipping to ${country} will cost ${delChina} credits`;
      break;

    case "Chile":
      return `Shipping to ${country} will cost ${delChile} credits`;
      break;

    case "Australia":
      return `Shipping to ${country} will cost ${delAustralia} credits`;
      break;

    case "Jamaica":
      return `Shipping to ${country} will cost ${delJamaica} credits`;
      break;

    default:
      return "Sorry, there is no delivery to your country";
  }
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
