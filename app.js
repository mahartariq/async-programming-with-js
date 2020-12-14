

console.log("Trip to Ninja Web Developer");

function learnHTML(callback){
    setTimeout(()=>{
        console.log("Code HTML");
        callback("html done what next");
    },10)
}

function callback(value){
    console.log(value);
}


learnHTML(callback)

console.log(" excitement overloaded ");