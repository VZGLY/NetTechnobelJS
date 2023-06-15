


let addItem = () => {
    let list = document.getElementById("maList")
    let newElem = document.createElement("li")
    newElem.innerHTML = document.getElementById("input").value
    list.appendChild(newElem)
}

