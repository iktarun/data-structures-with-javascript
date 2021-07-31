function* ayncCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(100);
    });
  });
}

function* generator(i) {
  yield* ayncCall();
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20
