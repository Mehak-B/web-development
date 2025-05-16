function addItem(){
    let list = document.getElementById("text").value
    let arrayList = []
    arrayList.push(list)
    toDOList(arrayList)
}

function toDOList(item){
    let listContainer = document.getElementById("display-todolist")
    let element = document.createElement("li")
    let eleWithDel = document.createElement("button")
    eleWithDel.innerText = "X"

    for(let i = 0; i< item.length; i++){
      element.innerText = item[i] 
      element.append(eleWithDel)
      console.log(element)
      listContainer.append(element)
      eleWithDel.addEventListener("click", function () {
        listContainer.removeChild(element);
    });
    }   
}

function addAttribute(){
    const clickDiv = document.getElementsByClassName('section')
    console.log(clickDiv)
    for(let i=0; i<=clickDiv.length; i++){
    if (clickDiv[i].getAttribute('onclick')) {
        console.log('true')
         clickDiv[i].setAttribute('mehak',"")
    }else{
        console.log("false")
    }
}

}

console.log(addAttribute())