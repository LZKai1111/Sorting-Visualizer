export function heapSort(arr) {
    const newArr = [...arr]
    const animations = []
    heap(newArr, animations)
    return animations
}

function heap(arr, animations) {
    let n = arr.length

    for(let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i, animations)    
    }

    for(let i = n - 1; i > 0; i--) {

        [arr[0], arr[i]] = [arr[i], arr[0]]

        animations.push(["compare", n, 0])
        animations.push(["revert", n, 0])
        animations.push(["swap", i, 0])

        heapify(arr, i, 0, animations)
    }
}

function heapify(arr, n, i, animations){
    
    let largest = i;

    let l = 2 * i + 1
    let r = 2 * i + 2

    animations.push(["compare", largest, l])
    animations.push(["revert", largest, l])

    if(l < n && arr[l] > arr[largest]) {
        largest = l
    }

    animations.push(["compare", largest, r])
    animations.push(["revert", largest, r])

    if(r < n && arr[r] > arr[largest]) {
        largest = r
    }

    if(largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        
        animations.push(["swap", i, largest])

        heapify(arr, n, largest, animations)
    }
}