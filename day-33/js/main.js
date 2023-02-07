console.log("hha");
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let a = 1;
function jaya(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      a = a + array[i];
    }
  }
  console.log(a);
}
jaya(array);
