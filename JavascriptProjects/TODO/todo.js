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