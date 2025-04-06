async function  fetchDogs(){
let fetchList =  await fetch('https://dog.ceo/api/breeds/list/all')
let List = await fetchList.json()
console.log(List)
fetchImages(Object.keys(List.message))
}

// function getData(list){
//     console.log(list)

// }

async function fetchImages(data){

      const images = data.map( async el =>{
     const fetchImage =  await fetch('https://dog.ceo/api/breed/' + el + '/images/random')
 
    const urlList = await fetchImage.json()

    const obj = { name: el,
        url:urlList.message
    }

    return obj
      })

const finalVal = await Promise.all(images)
console.log(finalVal)



}

console.log(fetchDogs())
// console.log(fetchImages())

