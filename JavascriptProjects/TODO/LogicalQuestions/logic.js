
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
let arr = [1,2,100,3,4,5,42,6,7,8,8,56,20,500]

function secMAx(item){
    let max = 0;
    let secmax = 0
    for(let i = 0 ; i < item.length; i++){
            if(item[i]> max){
                secmax = max
                max = item[i]
                console.log("max",max, secmax)    

}else if( item[i]>secmax){
    secmax = item[i]
    console.log("sec",secmax)

}
    }
    return secmax
}

console.log(secMAx(arr))