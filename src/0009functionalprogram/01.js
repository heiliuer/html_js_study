// https://medium.freecodecamp.org/functional-programming-in-js-with-practical-examples-part-1-87c2b0dbc276
const arr = (function () {
    var arr = []
    for (var i = 0; i < 1500; i++) {
        arr.push(Math.floor(10000 * Math.random()))
    }
    return arr.sort()
})();


function bubble(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr
}

wrapTime(bubble, 'bubble', arr) // 0.504ms

function insertSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var tmp = arr[i]
        for (var j = i - 1; j > 0; j--) {
            if (tmp < arr[j]) {
                arr[i] = arr[j]
                arr[j] = tmp
                break
            }
        }
    }
    return arr
}

wrapTime(insertSort, 'insertSort', arr)// 0.087ms

function quickSort(arr) {
    if (!arr.length) {
        return arr
    }
    var pivotIndex = Math.floor(arr.length / 2)
    var pivot = arr[pivotIndex]
    var left = [], right = []
    for (var i = 0; i < arr.length; i++) {
        if (i == pivotIndex) {
            continue
        }
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

function wrapTime(fun, name) {
    console.time(name)
    const rs = fun.apply(null, Array.prototype.slice.call(arguments, 2))
    console.timeEnd(name)
    return rs
}

wrapTime(quickSort, 'quickSort', arr) // 0.119ms

wrapTime((arr) => arr.sort(), 'Array.prototype.sort', arr)
