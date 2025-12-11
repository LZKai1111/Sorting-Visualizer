export function quickSort(arr){
    const newArr = [...arr]
    const animations = []
    recursiveSort(newArr, 0, newArr.length - 1, animations)
    return animations
}

function recursiveSort(arr, low, high, animations){

    if(low < high) {
        let pi = partition(arr, low, high, animations)

        recursiveSort(arr, low, pi - 1, animations)
        recursiveSort(arr, pi + 1, high, animations)
    }
}


function partition(arr, low, high, animations) {
    
    let pivot = arr[high]
    let i = low - 1

    for(let j = low; j <= high - 1; j++){
        animations.push(["comparePi", j, high])
        animations.push(["revertPi", j, high])
        if(arr[j] < pivot){
            i++;
            animations.push(["compareI", j, i])
            animations.push(["swap", j, i])
            animations.push(["revertI", j, i])
            swap(arr, i, j)
        }
    }

    animations.push(["swap", i + 1, high])

    swap(arr, i + 1, high)
    
    return i + 1;
}


function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
