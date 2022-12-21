function removeElement(arr, item) {
    if (!Array.isArray(arr)) {
        console.log("Given item isn`t an Array!")
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i,1);
            }
        }
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];

console.log(array);
removeElement(array,2);
console.log(array);