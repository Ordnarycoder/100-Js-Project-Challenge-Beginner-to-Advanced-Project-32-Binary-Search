let binarySearch = function(arr, num, start, end) {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === num) {
            console.log("Element found at index:", mid);
            return mid;  
        }

        else if (arr[mid] > num) {
            end = mid - 1;
        }

        else {
            start = mid + 1;
        }
    }

    console.log("Element not found!");
    return -1; 
};

let arr = [1, 3, 5, 7, 9, 11];
binarySearch(arr, 7, 0, arr.length - 1);
