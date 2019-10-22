import faker from "faker";
const goods = [];
for (let i = 0; i < 10; i++) {
  goods.push({
    name: faker.commerce.productName(),
    price: `${faker.commerce.price()} $`,
    description: `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial() } ${faker.commerce.product()}`
  });
}
console.log(goods);
function searchProducts(search) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const searchedData = goods.filter(good =>
        normalize(good.name).includes(normalize(search))
      );
      console.log(searchedData);
      res(searchedData);
    }, genRandom(1000, 300));
  });
}

function genRandom(max, min) {
  return Math.round(min + Math.random() * (max - min));
}
function normalize(str) {
  return str.toLocaleLowerCase();
}
export default searchProducts;
