// Задача 1. Пакування товарів

function isEnoughCapacity(products, containerSize) {
  // Підраховуємо загальну кількість товарів
  let totalProducts = 0;
  
  // Перебираємо об'єкт з товарами та додаємо їх кількість до загальної суми
  for (const key in products) {
    totalProducts += products[key];
  }
  
  // Перевіряємо, чи загальна кількість товарів менша або дорівнює розміру контейнера
  return totalProducts <= containerSize;
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false
