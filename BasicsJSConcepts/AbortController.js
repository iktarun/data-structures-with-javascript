

// Event Listener, Timeouts and promises
function fetchData(){
    const controller = new AbortController();
    const signal = controller.signal;
    const timeoutId = setTimeout(()=>controller.abort(), 3000)

    setTimeout(()=>{
        fetch("https://reqres.in/api/users?page=1", {signal})
        .then((result)=>result.json())
        .then((result)=>console.log(result))
        .catch((error)=>console.log(error))
        .finally(()=>clearTimeout(timeoutId))
        }, 5000)
    
}
fetchData();
