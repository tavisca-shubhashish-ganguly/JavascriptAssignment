let arr = [100, 2, 5, 12, 0]
findMinimumValue(arr)
arr = [-5, -10 , 100, 20, 30, -30, 12]
findMinimumValue(arr)


function findMinimumValue(arrr){
    let minValue = arrr[0]
for(let i=1;i<arrr.length;i++){
    if(arrr[i]<minValue){
        minValue=arrr[i]
    }

}
console.log(minValue)
}
let minValue = arr[0]
for(let i=1;i<arr.length;i++){
    if(arr[i]<minValue){
        minValue=arr[i]
    }

}