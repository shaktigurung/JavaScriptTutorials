function randNumber() {
    return Math.floor(Math.random() * 1080);
}

document.getElementById("favcolor").addEventListener("change",function(){
    let favcolor = document.getElementById("favcolor").value;
    document.getElementById("p").style = `color: ${favcolor}`;
})


//Add your code under here
document.getElementById("changeImage").addEventListener("click", function(){
    let num = randNumber();
    let url = `https://picsum.photos/600/400?image=${num}`;
    document.getElementById("image").src = url;
})

document.getElementById("heading").addEventListener("change", function(){
    let text = document.getElementById("heading").value;
    if (text == ""){
        document.querySelector("h1").innerHTML = "Welcome!"; 
    }
    else
    {
        document.querySelector("h1").innerHTML = `<h1>${text}</h1>`;
    }
    
})