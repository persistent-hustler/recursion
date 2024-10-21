let testArray = [2, 1, 3, 5, 7, 4, 6];

function mergeSort(arr) {
    if(arr.length === 1) return arr;
    const middleIndex = Math.ceil(arr.length / 2);
    const firstHalf = mergeSort(arr.slice(0, middleIndex));
    const secondHalf = mergeSort(arr.slice(middleIndex));
    const sortedArray = [];
    let i = 0;
    let j = 0;
    while( firstHalf[i] && secondHalf[j]) {
        if(firstHalf[i] < secondHalf [j]) {
            sortedArray.push(firstHalf[i]);
            i++;
        } else {
            sortedArray.push(secondHalf[j]);
            j++;
        }
    }

    return sortedArray.concat(firstHalf.slice(i)).concat(secondHalf.slice(j));
}

console.log(mergeSort(testArray));