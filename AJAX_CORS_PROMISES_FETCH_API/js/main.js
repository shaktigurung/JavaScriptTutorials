//console.log('test');
document.querySelector("button").addEventListener("click", getUserData);

//XHR
// function getUserData(){
//     //console.log("starting the request");
//     document.getElementById("root").innerHTML = "starting the request";

//     let request = new XMLHttpRequest();

//     request.open('GET', 'https://randomuser.me/api', true);

//     request.onload = () => {
//         if(request.status >= 200 && request.status < 400){
//             console.log(request.responseText);
//         }else{
//             console.log("Error");
//             console.log(request);
//         }
//     }
//     request.onerror = () =>{
//         console.log("Connection error");
//     }
//     request.send();
// }

//Jquery
function getUserData(){
    document.getElementById("root").innerHTML = "starting the request";

    $.ajax({
        url:'https://randomuser.me/api',
        type: 'GET',
        success: (data) =>{
            console.log(data);
        },
        error: (error) =>{
            console.log("Error");
            console.log(error);
        }
    })
}