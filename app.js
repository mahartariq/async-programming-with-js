

console.log("Trip to Ninja Web Developer");

function learnHTML(callback){
    setTimeout(()=>{
        console.log("Code HTML");
        htmlcallback("html done what next");
    },10)
}

function learnCSS(callback){
    setTimeout(()=>{
        console.log("Code CSS");
        csscallback("css done what next");
    },10)
}

function learnjs(callback){
    setTimeout(()=>{
        console.log("Code Javascript");
        jscallback("javascript done what next");
    },10)
}

function learngit(callback){
    setTimeout(()=>{
        console.log("Practice Version Control");
        gitcallback("Git Version Control done what next");
    },10)
}


function htmlcallback(value){
    console.log(value);
    learnCSS(csscallback)
}

function csscallback(value){
    console.log(value);
    learnjs(jscallback)
}
function jscallback(value){
    console.log(value);
    learngit(gitcallback)
}
function gitcallback(value){
    console.log(value);
}

learnHTML(htmlcallback)

console.log(" excitement overloaded ");