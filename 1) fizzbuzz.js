// Напишите программу, которая выводит на экран числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz»,
// а вместо чисел, кратных пяти — слово «Buzz».
// Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

const fizzBuzz = () => {
  const mapInto = (num) => {
    if (num % 15 === 0) return "FizzBuzz";
    if (num % 5 === 0) return "Buzz";
    if (num % 3 === 0) return "Fizz";
    return num;
  };

  return [...Array(100).keys()].map((el) => mapInto(el + 1));
};

const result = fizzBuzz();
