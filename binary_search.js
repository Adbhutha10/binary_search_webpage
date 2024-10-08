function performBinarySearch() {
    // Get input values
    const arrayInput = document.getElementById("arrayInput").value;
    const searchValue = Number(document.getElementById("searchValue").value);
    
    // Convert the array input to a proper array of numbers
    let array = arrayInput.split(',').map(item => Number(item.trim()));
    
    // Check if the array is sorted
    if (!isSorted(array)) {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `Error: The array is not sorted. Please enter a sorted array.`;
        return; // Exit the function if the array is not sorted
    }

    // Perform binary search
    let low = 0;
    let high = array.length - 1;
    let found = false;
    let index = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] === searchValue) {
            found = true;
            index = mid;
            break;
        } else if (array[mid] < searchValue) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    // Display result
    const resultDiv = document.getElementById("result");
    if (found) {
        resultDiv.innerHTML = `Value found at index: ${index}`;
    } else {
        resultDiv.innerHTML = `Value not found in the array.`;
    }
}

// Function to check if an array is sorted
function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false; // Return false if the array is not sorted
        }
    }
    return true; // Return true if the array is sorted
}
