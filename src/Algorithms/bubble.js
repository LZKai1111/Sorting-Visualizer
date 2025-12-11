export function bubbleSort(arr) {
    const newArr = [...arr]
    const animations = []
    bubble(newArr, animations)
    return animations
}

function bubble(arr, animations) {

    let swapped

    do {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++) {
            animations.push(["compare", i, i+1])
            animations.push(["revert", i, i+1])
            if(arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                animations.push(["swap", i, i+1])

                swapped = true
            }
        }
    } while(swapped)
}