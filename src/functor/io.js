const fs = require('fs');
const compose = require('./compose');

function IO(useEffect) {
  this.useEffect = useEffect;
}

IO.prototype.map = function map(f) {
  return new IO(compose(f, this.useEffect));
}

IO.prototype.chain = function(f) {
  return this.map(f).join();
}

IO.prototype.join = function() {
  return this.useEffect();
}

IO.of = function(useEffect) {
  return new IO(useEffect);
}

IO.prototype.do = function() {
  this.useEffect();
}

function readFile(filename) {
  return IO.of(() => {
    return fs.readFileSync(filename, 'utf-8');
  });
}

function print(str) {
  return IO.of(() => {
    console.log('new io:' + str);
  });
}

readFile('./index.js').chain(print).do();
