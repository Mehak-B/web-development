const arr = ["https://jsonplaceholder.typicode.com/todos", "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/albums","https://jsonplaceholder.typicode.com/photos", "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/photos","https://jsonplaceholder.typicode.com/albums"
]

const results = []

async function callAllApis(item){
    let obj = {}
    for(let i = 0; i<item.length; i++){
        if(obj[item[i]]){
        console.log("obj", obj[item[i]])
 results.push(obj[item[i]])
            // obj[item[i]] = obj[item[i]]
        
        }else{
            console.log("objelse",obj[item[i]])
            obj[item[i]] = await memo(item[i])
             results.push(obj[item[i]])


        }
    }
    console.log(obj)
    console.log(results)
}

async function memo(api){
    let getData = await fetch(api)
    let data = await getData.json()
    console.log(data)
    return data
}

console.log(callAllApis(arr))


