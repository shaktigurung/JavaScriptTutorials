class List{
    constructor(){
        this.item = " ";
    }
    addItem(item){
        this.item += item;
    }
    displayItem(){
        console.log(this.item);
       //document.getElementById("display").innerHTML = `${this.item} </br>`;
    }
}

function itemList(list){
    list.addItem(list);
    list.displayItem();
}
let list = new List(input);
document.getElementById("todo").addEventListener("click",()=> itemList(list));

