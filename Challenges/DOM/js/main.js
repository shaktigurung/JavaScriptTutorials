//Counts number of item entered
let clicks = 0;
function click() {
        clicks += 1;
        document.getElementById("count").innerHTML = clicks;
}
document.getElementById("todo").addEventListener("click",createList);
document.getElementById("todo").addEventListener("click",click);

// Creates New list
function createList(){
    event.preventDefault();
    let textBox = document.querySelector("input");
    let newItem = document.createElement("li");
    newItem.textContent = textBox.value;
    document.querySelector("OL").appendChild(newItem);
    textBox.value ="";
}

//