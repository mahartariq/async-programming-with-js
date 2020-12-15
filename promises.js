

console.log("Trip to Ninja Web Developer");

function learnHTML(msg){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (msg==="laptop"){
                console.log("Code HTML");
                resolve("html done what next");
            }
            else{
                reject("get out");
            }
        },10)
    })
    return promise;
}

function learnCSS(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Code CSS");
            resolve("css done what next");
        },10)
    })
    return promise;
}

function learnjs(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Code Javascript");
            resolve("javascript done what next");
        },10)
    })
    return promise
}

function learngit(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Practice Version Control");
            resolve("Git Version Control done what next");
        },10)
    })
    return promise;
}



let promise = learnHTML("no laptop")
//console.log(promise);
promise.then((value)=>{
    console.log(value);
    return learnCSS();
})
.then((cssvalue)=>{
    console.log(cssvalue);
    return learnjs();
})
.then(function(jsvalue){
    console.log(jsvalue);
})
.catch((error)=>{
    console.log(error);
})






console.log(" excitement overloaded ");