function topNums (str) {
    let nums = str.split(' ').map(Number);
    let avg = nums.reduce((acc, val) => acc + val, 0) / nums.length;
    let topNums = nums.sort((a, b) => b - a).filter(num => num > avg).slice(0, 5);
    
    if (topNums.length == 0) {
        console.log('No');
    }
    console.log(topNums.join(' '));

}
topNums ('5 2 3 4 -10 30 40 50 20 50 60 60 51');
// topNums ('1');
// topNums ('-1 -2 -3 -4 -5 -6');
// topNums ('10 20 30 40 50' );

