function FirstNElements(arr,NoOfElements=1){
    console.log(arr.slice(0,NoOfElements))

}

let emptyarr =[]
let arr = [7, 9, 0, -2]
FirstNElements(emptyarr)
FirstNElements(emptyarr, 3)
FirstNElements(arr)
FirstNElements(arr, 3)