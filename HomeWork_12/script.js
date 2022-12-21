function removeElement(arr, item) {
    if (!Array.isArray(arr)) {
        console.log("Given item isn`t an Array!")
    } else {
        arr.splice(arr.indexOf(item),1);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];

console.log(array);
removeElement(array,3);
console.log(array);