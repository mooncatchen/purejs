function curry(fn) {
  var slice = Array.prototype.slice;
  var concat = Array.prototype.concat;
  return function curried() {
    var args = slice.call(arguments)
    return args.length >= fn.length
      ? fn.apply(this, args)
      : function () {
        var newArgs = slice.call(arguments);
        return curried.apply(this, concat.call(args, newArgs)); 
      };
  }
}
