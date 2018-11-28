const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
//const students = ["Ivan", "Santosh", "Ghalip", "Hamish"];

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    // console.log(req.url);
    // console.log(req.method);
    let url = req.url;
    let method = req.method;

    if (method ==="GET" && url ==="/"){
        res.setHeader("Content-type", "text/plain");
        console.log("match the students");
    }else if(method ==="GET" && url ==="/students"){
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        res.end(JSON.stringify(students));
        console.log("show list of the students");
    }else if(method ==="POST" && url ==="/students"){
        console.log("create new students");
    }else if(url ==="/favicon.ico"){
        console.log("We dont have a favicon");
    }
    else{
        console.log("Route not found");
        throw "Route not found";
    }   
     res.end("Hello World");
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});