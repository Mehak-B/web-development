
// 10,14,18,22,26,29

// function sumConsecutiveArray(item, k){
// let sum = 0;
// let max=0
//     for(let i = 0; i<item.length-k+1; i++){
//         sum = 0
//         for (let j = i; j<i+k;j++ ){
//             sum += item[j]
//             console.log("ij",i,j)
//             if(sum > max){
//                 max=sum
//             }
//         }
//         console.log("sum",sum)
//     }

//     return max

// }
// console.log(sumConsecutiveArray(arr,4))
// let arr = [1,2,100,3,4,5,42,6,7,8,8,56,20,500]

// function secMAx(item){
//     let max = 0;
//     let secmax = 0
//     for(let i = 0 ; i < item.length; i++){
//             if(item[i]> max){
//                 secmax = max
//                 max = item[i]
//                 console.log("max",max, secmax)    

// }else if( item[i]>secmax){
//     secmax = item[i]
//     console.log("sec",secmax)

// }
//     }
//     return secmax
// }

// console.log(secMAx(arr))


// polyfill for splice

// let arr = [2,5,3,7,54,4]


// // index = 2
// // delNum = 2
// // 3,7
// // [2,5,54,7]

// Array.prototype.mySplice = function (index, delNum = null, ...addVal) {

//     let delItem = [];
//     let newArr = [...this];
//     this.length = 0
//     for( let i = 0; i<newArr.length; i++){
//         if(i >= index && i<= index+delNum-1) {
//          delItem.push(newArr[i]) 
//          console.log("addVal",addVal)
//         }else{
//         this.push(newArr[i])
//     }
// }
// // console.log(this.length + addVal.length)

// const rightPart = this.slice(index)
// this.length = index

// for(let i=0;i<addVal.length ; i++){
//             this[this.length] = addVal[i] 
//             this[6] = addVal[0]
// }
// for(let i = 0; i<rightPart.length; i++){
//     this[this.length] = rightPart[i]
// }
// console.log()
//     return delItem
// }

// console.log(arr.mySplice(2,2,4,5,6,7,8,9))
// console.log(arr)


// let arr = [2,5,3,7,54,4]

// // 2,4
// //output = [3,7]

// Array.prototype.newSlice = function (start=null, end=null){
//     let newArray = []

//     if(start>0 && end>0 ){
//     for (let i = start; i< end; i++){
//         newArray.push(this[i])     
//     }
// }
// if(start>0 && !end){
//     for(let i = start; i<this.length; i++){
//             newArray.push(this[i])
//     }
// }

// if(!start && !end){
//     console.log(start)
//             newArray = [...this]

// }
//  if(start<0 && !end){
//     let newStart = Math.abs(start) 

//     for(let i=(this.length-newStart); i<this.length; i++){
//         newArray.push(this[i])



//     }
//  }



// return newArray
// }

// console.log(arr.newSlice(-2))

// let arr =  [10,80,40,30,20,50]

// targetSum = 50

// function targetSum(item){
// for(let i = 0; i<item.length;i++){
//     for(let j = i+1;j<item.length;j++){
//     if(item[i]+item[j] == 50){
//         return {i,j}

//     }
//     }
// }
//     return null

// }

// console.log(targetSum(arr))

// function targetSum(item, target){
//     let obj = {}
//     for(const num of item){
//         let sec = target - num
//         if(sec in obj){
//             return {sec,num}
        
//         }else{
//             obj[num] = 1
            
//         }
//     }
//     return []
// }

// console.log(targetSum(arr, 50))

// function sortArr(item){
//     let newArr = []
//     for(let i = 0; i<item.length; i++){
//         for(let j = i+1; j<item.length; j++){
//         if(item[i]>item[j]){
//             let temp = item[i];
//             item[i] = item[j];
//             item[j] = temp

//             // newArr.push(item[i])
//             // console.log(newArr)
//         }
//         }
//     }
//     return item
// }

// console.log(sortArr(arr))



// function swapNumbers(a,b){

//     // let c = a;
//     // a = b;
//     // b = c
//     [a,b] = [b,a]
// // 3,4


//     return [a,b]
// }
// console.log(swapNumbers(3,4))

const arr = [3,5,6,8,7,9,10,23, 5]
const arr2 = [6,22,45,56,8,7,3]

// function interSection(a1, a2){
//     const newArr = []
//         for(let i = 0; i< a2.length; i++){
//             if(a1.includes(a2[i])){
//                 newArr.push(a2[i])
//             }
//         }
//     return newArr
// }
// console.log(interSection(arr,arr2))

// const newObj = new Set(arr)
// const newObj2 = new Set(arr2)

// const interSection = [...newObj].filter(item => newObj2.has(item))

// console.log(interSection)


// console.log(newObj)

const str = "mehakme"

const newSet = new Set(str)


// const newStr = [...newSet].toString().replaceAll(',', '')
const newStr = [...newSet].join('')


console.log(newStr)
