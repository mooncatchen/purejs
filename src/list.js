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
