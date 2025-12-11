export function mergeSort(arr) {
    const animations = [];
    if(arr.length < 2) return animations;
    const aux =  arr.slice();
    mergeHelper(arr.slice(), 0, arr.length - 1, aux, animations)
    return animations;
}

function mergeHelper(arr, start, end, aux, animations) {
    if(start === end) return;
    const mid = Math.floor((start + end) /2);
    mergeHelper(aux, start, mid, arr, animations)
    mergeHelper(aux, mid + 1, end, arr, animations)
    merge(arr, start, mid, end, aux, animations)
}

function merge(arr, start, mid, end, aux, animations) {
    let i = start
    let j = mid + 1
    let k = start
    while(i <= mid && j <= end) {
        animations.push(["compare", i, j])
        animations.push(["revert", i, j])
        
        if(aux[i] <= aux[j]) {
            animations.push(["overwrite", k, aux[i]])
            arr[k] = aux[i]
            k++
            i++
        } else {
            animations.push(["overwrite", k, aux[j]])
            arr[k] = aux[j]
            k++
            j++
        }
    }

    while(i <= mid) {
        animations.push(["compare", i, i])
        animations.push(["revert", i, i])
        animations.push(["overwrite", k, aux[i]])
        arr[k] = aux[i]
        k++
        i++
    }
    while(j <= end) {
        animations.push(["compare", j, j])
        animations.push(["revert", j, j])
        animations.push(["overwrite", k, aux[j]])
        arr[k] = aux[j]
        k++
        j++
    }
}