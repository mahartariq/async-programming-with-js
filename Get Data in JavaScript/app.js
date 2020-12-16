
async function fetchData(){
    
    const response =await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
    const data = await response.json();
    console.log(data);
}


myObj = {
    title:"arslan",
    body:"aic,cnc",
    userId:34,
}


async function postData(){
    
    const response =await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        body: JSON.stringify(myObj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
}

postData()