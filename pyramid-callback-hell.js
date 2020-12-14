

console.log("Trip to Ninja Web Developer");

function learnHTML(callback) {
    setTimeout(() => {
        console.log("Code HTML");
        callback("html done what next");
    }, 10)
}

function learnCSS(callback) {
    setTimeout(() => {
        console.log("Code CSS");
        callback("css done what next");
    }, 10)
}

function learnjs(callback) {
    setTimeout(() => {
        console.log("Code Javascript");
        callback("javascript done what next");
    }, 10)
}

function learngit(callback) {
    setTimeout(() => {
        console.log("Practice Version Control");
        callback("Git Version Control done what next");
    }, 10)
}
function learnReact(callback) {
    setTimeout(() => {
        console.log("Code Reactjs");
        callback("Reactjs done what next");
    }, 10)
}
function learnTypescript(callback) {
    setTimeout(() => {
        console.log("Code Typescript");
        callback("Typescript done what next");
    }, 10)
}



learnHTML(function (value) {
    console.log(value);
    learnCSS(function (value) {
        console.log(value);
        learnjs(function (value) {
            console.log(value);
            learngit(function (value) {
                console.log(value);
                learnReact(function (value) {
                    console.log(value)
                    learnTypescript(function (value) {
                        console.log(value)
                    })
                })
            })
        })
    })
})

console.log(" excitement overloaded ");