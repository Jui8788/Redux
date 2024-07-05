// function currying

const add = (a) => {
  return (b) => {
    return (c) => {
      return a * (b + c);
    };
  };
};

// console.log(add(1)(2)(1));

const level = add(5);

console.log(level(5)(4));
console.log(level(6)(7));
