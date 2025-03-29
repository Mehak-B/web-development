
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


let arr = [2,5,3,7,54,4]
