function mergeArrs(arr1, arr2){
    let merged = [];

    for(let i = 0; i < arr1.length; i++){
        let el1 = arr1[i];
        let el2 = arr2[i];
        
        if (i % 2 == 0){
            let sum = Number(el1) + Number(el2);
            merged.push(sum);
        } else {
            let concatenate = el1 + el2;
            merged.push(concatenate);
        }
        
    }console.log(merged.join(' - '));
}
mergeArrs(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'] );
mergeArrs(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);