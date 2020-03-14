export function length(arr) {
  return arr.length;
}

export function take(n, arr) {
  return arr.slice(0, n);
}

export function head(arr) {
  return arr[0];
}

export function tail(arr) {
  return arr.slice(1);
}

export function init(arr) {
  return arr.slice(0, arr.length - 1);
}

export function last(arr) {
  return arr[arr.length - 1];
}

export function drop(n, arr) {
  if (n <= 0 || len(arr) === 0) {
    return arr;
  }

  return arr.slice(n);
}

export function empty(arr) {
  return len(arr) === 0;
}

export function map(func, arr) {
  if (empty(arr)) {
    return [];
  }

  func(arr[0])
  return [func(arr[0]), ...map(func, arr.slice(1))];
}

export function fold(func, acc, arr) {
  if (empty(arr)) {
    return acc;
  }

  return fold(func, func(acc, arr[0]), arr.slice(1));
}

export function filter(func, arr) {
  if (empty(arr)) {
    return [];
  }

  if (func(arr[0])) {
    return [arr[0], ...filter(func, arr.slice(1))];
  }

  return filter(func, arr.slice(1));
}
