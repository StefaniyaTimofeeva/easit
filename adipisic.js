const sprite = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const d = {
  y0: 2,
  y1: 5
};
const w32 = 32;

d.sprite = sprite.slice(0, (d.y1 - d.y0) * w32);

console.log(d.sprite); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
