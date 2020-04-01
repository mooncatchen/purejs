module.exports = function compose() {
  var slice = Array.prototype.slice;
  var args = slice.call(arguments);
  args.forEach(function (arg) {
    if (typeof arg !== 'function') {
      throw new Error('TypeError: arguments of compose should be function');
    }
  });

  return function () {
    var i = args.length - 1;
    var args2 = slice.call(arguments);
    var result = args2[0];
    while (i >= 0) {
      result = args[i].call(null, result);
      i --;
    }

    return result;
  }
}
