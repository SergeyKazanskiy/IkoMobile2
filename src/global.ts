export const typeAction = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  MOVE: "MOVE",
  EDIT: "EDIT"
};

export const typeMove = {
  UP: "UP",
  DOWN: "DOWN",
  RIGHT: "RIGHT",
  LEFT: "LEFT"
};

export function swapItems(arr: Array<any>, a: number, b: number) {
  if (a < 0 || a >= arr.length || b < 0 || b >= arr.length) {
    return;
  }
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
