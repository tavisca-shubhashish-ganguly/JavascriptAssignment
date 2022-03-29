function FindSubset(firstArray,secondArray){
    let isSubArrSecond = secondArray.every(e => firstArray.includes(e));
    let isSubArrFirst = firstArray.every(e => secondArray.includes(e));
    if(isSubArrSecond && isSubArrFirst){
        console.log("A is same as B")
    }
    else{
        if(!(isSubArrSecond) && !(isSubArrFirst)){
            console.log("A and B are not equal")
        }
        else{
            if(isSubArrFirst){
                console.log("A is a subset of B ")
            }
            else{
                console.log("B is a subset of A ")
            }
        }
    }
}

A = [1, 2, 3]
B = [1, 2, 4]
C = [1, 2, 3, 4, 5]
D = [1,2,3]

FindSubset(A,B)//not equal
FindSubset(A,D)//equal
FindSubset(A,C)//A is a subset of B
FindSubset(C,A)//B is a subset of A