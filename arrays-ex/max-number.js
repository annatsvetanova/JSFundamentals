function maxNumber(arr) {
  let arrTop = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    isTop = true;

    for (let j = i + 1; j < arr.length; j++) {
      let rightNum = arr[j];

      if (rightNum >= num) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      arrTop.push(num);
    }
  }
  console.log(arrTop.join(" "));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
